import { siteUrl } from "@/lib/content";

// Kit v4: create (or find) the subscriber, then add them to the signup form.
// Set KIT_API_KEY and KIT_FORM_ID in the environment (server only, never NEXT_PUBLIC_).
const KIT_API = process.env.KIT_API_URL ?? "https://api.kit.com/v4";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function json(body: Record<string, unknown>, status: number) {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

async function kit(path: string, key: string, body: Record<string, unknown>) {
  return fetch(`${KIT_API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "X-Kit-Api-Key": key },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
  });
}

export async function POST(request: Request) {
  const key = process.env.KIT_API_KEY;
  const formId = process.env.KIT_FORM_ID;
  if (!key || !formId) return json({ error: "not_configured" }, 503);

  let data: { email?: unknown; company?: unknown };
  try {
    data = await request.json();
  } catch {
    return json({ error: "invalid" }, 400);
  }

  // Hidden honeypot field: real visitors never fill it. Pretend success for bots.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const email = typeof data.email === "string" ? data.email.trim() : "";
  if (!EMAIL.test(email) || email.length > 254)
    return json({ error: "invalid" }, 400);

  try {
    const created = await kit("/subscribers", key, { email_address: email });
    if (!created.ok) return json({ error: "provider" }, 502);

    const added = await kit(
      `/forms/${encodeURIComponent(formId)}/subscribers`,
      key,
      {
        email_address: email,
        referrer: siteUrl,
      },
    );
    if (!added.ok) return json({ error: "provider" }, 502);
  } catch {
    return json({ error: "provider" }, 502);
  }

  return json({ ok: true }, 200);
}

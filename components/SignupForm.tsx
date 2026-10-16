"use client";

import { useState } from "react";

// Posts to /api/subscribe, which adds the address to Kit (see app/api/subscribe/route.ts).
const ENDPOINT = "/api/subscribe";

type Status = "idle" | "sending" | "done" | "error" | "unconfigured";

const messages: Record<Exclude<Status, "idle" | "sending">, string> = {
  done: "Thanks. You're on the list.",
  error:
    "Something went wrong. Please try again, or email hello@vikasmalik.com.",
  unconfigured: "Signup isn't switched on yet. Please check back soon.",
};

export function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    setStatus("sending");
    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: form.get("email"),
          company: form.get("company"),
        }),
      });
      setStatus(
        res.ok ? "done" : res.status === 503 ? "unconfigured" : "error",
      );
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      <p className="max-w-[460px] text-[15px] leading-[1.6] text-ink-2">
        Occasional field notes. What I&apos;m building, what broke, what I
        learned. No spam, unsubscribe anytime.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute -left-[9999px] h-0 w-0 opacity-0"
        />
        <label htmlFor="signup-email" className="sr-only">
          Email address
        </label>
        <input
          id="signup-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="min-h-11 min-w-0 flex-1 rounded-full border-2 border-line bg-surface px-5 py-2.5 text-[15px] text-ink placeholder:text-muted focus-visible:border-green"
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="min-h-11 cursor-pointer rounded-full border-2 border-green bg-green px-6 py-2.5 text-[15px] font-semibold text-white hover:border-green-hover hover:bg-green-hover disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Subscribe"}
        </button>
      </div>
      <p className="text-[13px] text-muted">
        By subscribing you agree to the{" "}
        <a href="/privacy" className="underline underline-offset-4">
          privacy notice
        </a>
        .
      </p>
      <p
        role="status"
        aria-live="polite"
        className="min-h-5 text-sm font-semibold text-green"
      >
        {status !== "idle" && status !== "sending" ? messages[status] : ""}
      </p>
    </form>
  );
}

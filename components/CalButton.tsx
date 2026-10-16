"use client";

import { getCalApi } from "@calcom/embed-react";

// Cal.com event as "username/event-slug". Override with NEXT_PUBLIC_CAL_LINK if the event changes.
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK || "vikypediaa/20-min-intro-with-vikas";
const NAMESPACE = "intro";
const CONFIG = { layout: "month_view", theme: "light" } as const;

const className =
  "rounded-full border-2 border-green bg-green px-[26px] py-4 text-center text-base font-semibold !text-white no-underline hover:border-green-hover hover:bg-green-hover cursor-pointer";

// The Cal.com script (and the cookie it sets) only loads once someone shows intent to book:
// hover, keyboard focus or click. Visitors who never go near the button never touch Cal.com.
async function loadCal() {
  const cal = await getCalApi({ namespace: NAMESPACE });
  cal("ui", {
    theme: "light",
    hideEventTypeDetails: false,
    layout: "month_view",
  });
  return cal;
}

export function CalButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      onPointerEnter={loadCal}
      onFocus={loadCal}
      onClick={async () => {
        const cal = await loadCal();
        cal("modal", { calLink: CAL_LINK, config: CONFIG });
      }}
      className={className}
    >
      {children}
    </button>
  );
}

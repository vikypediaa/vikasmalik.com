"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

// Cal.com event as "username/event-slug". Override with NEXT_PUBLIC_CAL_LINK if the event changes.
const CAL_LINK =
  process.env.NEXT_PUBLIC_CAL_LINK || "vikypediaa/20-min-intro-with-vikas";
const NAMESPACE = "intro";

const className =
  "rounded-full border-2 border-green bg-green px-[26px] py-4 text-center text-base font-semibold !text-white no-underline hover:border-green-hover hover:bg-green-hover cursor-pointer";

export function CalButton({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace={NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view","theme":"light"}'
      className={className}
    >
      {children}
    </button>
  );
}

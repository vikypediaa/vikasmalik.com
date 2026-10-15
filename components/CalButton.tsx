"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { links } from "@/lib/content";

// TODO(spec s8): set NEXT_PUBLIC_CAL_LINK to "username/event-slug" for "20 min intro with Vik".
// Until then the button falls back to an email so it never dead-ends.
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK;
const NAMESPACE = "intro";

const className =
  "rounded-full border-2 border-green bg-green px-[26px] py-4 text-center text-base font-semibold !text-white no-underline hover:border-green-hover hover:bg-green-hover cursor-pointer";

export function CalButton({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!CAL_LINK) return;
    (async () => {
      const cal = await getCalApi({ namespace: NAMESPACE });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  if (!CAL_LINK) {
    return (
      <a
        href={`mailto:${links.email}?subject=${encodeURIComponent("20-min intro call")}`}
        className={className}
      >
        {children}
      </a>
    );
  }

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

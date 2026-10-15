import { close, links } from "@/lib/content";
import { CalButton } from "./CalButton";

export function Close() {
  return (
    <section id="book" className="border-t border-line py-[72px] pb-24">
      <p className="mb-3 text-[13px] font-bold tracking-[0.16em] text-green uppercase">
        {close.label}
      </p>
      <h2 className="mb-6 max-w-[760px] font-display text-[clamp(38px,6vw,64px)] leading-[1.05] font-normal">
        Got a growth problem?{" "}
        <em className="text-green">Let&apos;s map the route.</em>
      </h2>
      <p className="mb-8 max-w-[560px] text-[19px] leading-[1.6] text-ink-2">
        {close.line}
      </p>
      <div className="flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
        <CalButton>Book a 20-min call</CalButton>
        <a
          href={links.linkedin}
          className="rounded-full border-2 border-green px-[26px] py-4 text-center text-base font-semibold text-green no-underline hover:bg-green hover:!text-white"
        >
          Connect on LinkedIn →
        </a>
        <a
          href={`mailto:${links.email}`}
          className="py-2 text-center font-mono text-[15px] sm:px-2"
        >
          {links.email}
        </a>
      </div>
      <p className="mt-12 font-display text-[28px] text-ink-2 italic">
        {close.signoff}
      </p>
    </section>
  );
}

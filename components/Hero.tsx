import Image from "next/image";
import { hero, links } from "@/lib/content";
import { ContourBackdrop } from "./ContourBackdrop";
import { TrailDeck } from "./TrailDeck";

export function Hero() {
  return (
    <section
      id="top"
      className="flex flex-col items-center gap-14 pt-10 pb-16 lg:flex-row lg:pt-16 lg:pb-[88px]"
    >
      <div className="flex min-w-0 flex-col gap-6 lg:flex-[1_1_480px]">
        <div className="flex flex-wrap items-center gap-3 font-mono text-[13px] text-ink-2">
          <span>{hero.coordinates}</span>
          <span aria-hidden="true" className="text-contour">
            /
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-contour px-3 py-1.5 font-semibold text-green">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-green"
            />
            {hero.place}
          </span>
        </div>
        <p className="text-[13px] font-bold tracking-[0.16em] text-green uppercase">
          {hero.eyebrow}
        </p>
        <h1 className="font-display text-[clamp(46px,7vw,76px)] leading-[1.02] font-normal tracking-[-0.01em]">
          I help small businesses{" "}
          <em className="text-green">win more customers</em> with AI.
        </h1>
        <p className="max-w-[560px] text-[19px] leading-[1.6] text-ink-2">
          {hero.sub}
        </p>
        <div className="flex flex-col gap-3.5 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
          <a
            href={links.cal}
            className="rounded-full border-2 border-green bg-green px-[26px] py-4 text-center text-base font-semibold !text-white no-underline hover:border-green-hover hover:bg-green-hover"
          >
            Book a 20-min call
          </a>
          <a
            href={links.linkedin}
            className="rounded-full border-2 border-green px-[26px] py-4 text-center text-base font-semibold text-green no-underline hover:bg-green hover:!text-white"
          >
            Connect on LinkedIn →
          </a>
        </div>
        <p className="pt-2 text-[15px] font-bold tracking-[0.08em] text-ink">
          {hero.credibility}
        </p>
      </div>

      <div className="flex min-w-0 flex-col items-center gap-6 lg:flex-[1_1_440px] lg:flex-row lg:justify-center">
        <div className="relative isolate flex w-full max-w-[470px] flex-col items-center gap-6 lg:block lg:h-[580px]">
          <div className="relative h-[322px] w-[260px] lg:static lg:h-auto lg:w-auto">
            <ContourBackdrop className="absolute top-1/2 left-1/2 h-[420px] w-[420px] max-w-none -translate-x-1/2 -translate-y-1/2 lg:top-[-20px] lg:left-[-40px] lg:h-[540px] lg:w-[540px] lg:translate-x-0 lg:translate-y-0" />
            <Image
              src="/headshot.png"
              alt="Portrait of Vikas Malik"
              width={680}
              height={840}
              priority
              sizes="(min-width: 900px) 340px, 260px"
              className="relative h-[322px] w-[260px] rounded-[200px_200px_24px_24px] bg-[#e8e0d2] object-cover object-top lg:absolute lg:top-0 lg:right-0 lg:h-[420px] lg:w-[340px]"
            />
          </div>
          <TrailDeck />
        </div>
      </div>
    </section>
  );
}

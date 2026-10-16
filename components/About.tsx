import { about } from "@/lib/content";
import { PhotoDeck } from "./PhotoDeck";

export function About() {
  return (
    <section id="about" className="border-t border-line py-[72px]">
      <p className="mb-3 text-[13px] font-bold tracking-[0.16em] text-green uppercase">
        {about.label}
      </p>
      <h2 className="mb-10 font-display text-[clamp(38px,5vw,48px)] leading-[1.1] font-normal">
        Off the <em>trail.</em>
      </h2>
      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-14">
        <div className="flex flex-col gap-6 lg:flex-[1_1_520px]">
          <p className="max-w-[600px] text-[19px] leading-[1.6] text-ink-2">
            {about.body}
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {about.tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-contour bg-surface px-3.5 py-1.5 text-sm font-medium text-ink-2"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
        <PhotoDeck />
      </div>
    </section>
  );
}

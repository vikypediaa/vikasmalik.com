import { results } from "@/lib/content";
import { Ridgeline } from "./Ridgeline";

function StatBlock({
  value,
  title,
  detail,
}: {
  value: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="flex flex-col gap-2 border-t-2 border-ink pt-5">
      <div className="font-display text-[clamp(64px,9vw,88px)] leading-none text-green">
        {value}
      </div>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm text-muted">{detail}</div>
    </div>
  );
}

export function Results() {
  return (
    <section id="results" className="border-t border-line py-[72px]">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-3">
        <p className="text-[13px] font-bold tracking-[0.16em] text-green uppercase">
          {results.label}
        </p>
        <p className="font-mono text-xs text-muted">{results.tag}</p>
      </div>
      <h2 className="mb-10 font-display text-[clamp(38px,5vw,48px)] leading-[1.1] font-normal">
        Results, <em>not slogans.</em>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-8">
        {results.stats.map((s) => (
          <StatBlock key={s.value} {...s} />
        ))}
      </div>
      <Ridgeline />
    </section>
  );
}

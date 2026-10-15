import { builds } from "@/lib/content";

type Build = (typeof builds.items)[number];

function WaypointCard({ b }: { b: Build }) {
  return (
    <article className="flex flex-col gap-3.5 rounded-[18px] border border-line bg-surface p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[11px] text-muted">{b.wp}</span>
        <span
          className={`rounded-full px-2.5 py-[5px] text-xs font-bold ${
            b.statusStyle === "solid"
              ? "bg-green text-white"
              : "border border-green text-green"
          }`}
        >
          {b.status}
        </span>
      </div>
      <h3 className="font-display text-[34px] leading-tight font-normal">
        {b.name}
      </h3>
      <p className="text-[15px] leading-[1.6] text-ink-2">{b.body}</p>
      <p className="text-[13px] text-muted">{b.stack}</p>
      {b.cta.href ? (
        <a href={b.cta.href} className="text-[15px] font-semibold">
          {b.cta.label}
        </a>
      ) : (
        <span className="text-[15px] font-semibold text-muted">
          {b.cta.label}
        </span>
      )}
    </article>
  );
}

export function Builds() {
  return (
    <section id="builds" className="border-t border-line pt-[72px] pb-24">
      <p className="mb-3 text-[13px] font-bold tracking-[0.16em] text-green uppercase">
        {builds.label}
      </p>
      <h2 className="mb-10 font-display text-[clamp(38px,5vw,48px)] leading-[1.1] font-normal">
        Waypoints, <em>shipped.</em>
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-6">
        {builds.items.map((b) => (
          <WaypointCard key={b.name} b={b} />
        ))}
      </div>
    </section>
  );
}

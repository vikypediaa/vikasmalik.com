import { results } from "@/lib/content";

const chip =
  "absolute z-[2] -translate-x-1/2 whitespace-nowrap rounded-full bg-bg/90 px-2 py-0.5 font-mono text-xs";

export function Ridgeline() {
  return (
    <div className="mt-[72px]">
      {/* Under 640px the ridge and its floating captions are hidden; the career list carries the story. */}
      <div
        className="relative hidden h-[250px] w-full sm:block"
        aria-hidden="true"
      >
        {results.peaks.map((p) => (
          <div
            key={p.label}
            className={`${chip} ${"now" in p && p.now ? "font-semibold text-green" : "text-ink-2"}`}
            style={{ left: `${p.left}%`, top: p.top }}
          >
            {p.label}
          </div>
        ))}
        <div className="absolute top-1.5 right-[29px] z-[2] rounded-full bg-bg/90 px-2 py-0.5 font-mono text-xs font-semibold whitespace-nowrap text-terracotta-text">
          SUMMIT · AHEAD ▲
        </div>
        <svg
          viewBox="0 -50 1000 270"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 block h-[250px] w-full"
        >
          <path
            d="M0 220 L0 175 L70 150 L140 168 L210 128 L290 150 L360 112 L430 138 L520 92 L600 120 L680 70 L760 98 L840 52 L900 70 L960 10 L1000 30 L1000 220 Z"
            fill="var(--color-sand)"
          />
          <path
            d="M0 220 L0 190 L60 178 L125 150 L185 182 L250 170 L310 140 L375 112 L445 150 L505 138 L565 104 L625 74 L690 112 L750 96 L815 56 L875 40 L920 58 L975 -20 L1000 0 L1000 220 Z"
            fill="var(--color-sage)"
          />
          <path
            d="M0 220 L0 205 L80 196 L150 186 L230 200 L320 184 L410 196 L500 176 L590 188 L680 166 L780 180 L880 158 L1000 170 L1000 220 Z"
            fill="var(--color-green)"
          />
          <path
            d="M115 157 L125 150 L135 157 Z M365 119 L375 112 L385 119 Z M615 81 L625 74 L635 81 Z M864 48 L875 40 L886 48 Z M960 -8 L975 -20 L990 -8 Z"
            fill="var(--color-surface)"
          />
          <path
            d="M875 40 L920 58 L975 -20"
            fill="none"
            stroke="var(--color-terracotta-text)"
            strokeWidth="2"
            strokeDasharray="6 5"
          />
          {[
            [125, 150],
            [375, 112],
            [625, 74],
          ].map(([cx, cy]) => (
            <circle
              key={cx}
              cx={cx}
              cy={cy}
              r="6"
              fill="var(--color-bg)"
              stroke="var(--color-ink)"
              strokeWidth="2"
            />
          ))}
          <circle
            cx="875"
            cy="40"
            r="6"
            fill="var(--color-green)"
            stroke="var(--color-ink)"
            strokeWidth="2"
          />
          <line
            x1="975"
            y1="-20"
            x2="975"
            y2="-48"
            stroke="var(--color-ink)"
            strokeWidth="2"
          />
          <path
            d="M975 -48 L998 -41 L975 -34 Z"
            fill="var(--color-terracotta)"
          />
        </svg>
      </div>

      <ol className="mt-[18px] grid grid-cols-1 gap-4 text-[14px] leading-[1.45] sm:grid-cols-2 sm:text-center lg:grid-cols-4">
        {results.stops.map((s) => (
          <li key={s.years}>
            <div className="font-bold">{s.years}</div>
            <div className="text-muted">{s.text}</div>
          </li>
        ))}
      </ol>
    </div>
  );
}

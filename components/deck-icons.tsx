import type { CardIcon } from "@/lib/content";

// Line drawings from the A1 design, drawn at 17% opacity by the card.
const paths: Record<CardIcon, React.ReactNode> = {
  growth: (
    <>
      <path d="M10 90 V12 M10 90 H92" />
      <path d="M18 76 L38 58 L52 66 L82 30" />
      <path d="M66 30 H82 V46" />
      <rect x="22" y="80" width="8" height="10" />
      <rect x="40" y="72" width="8" height="18" />
      <rect x="58" y="62" width="8" height="28" />
      <rect x="76" y="50" width="8" height="40" />
    </>
  ),
  gtm: (
    <>
      <path d="M50 8 C 66 20 70 44 62 66 H38 C 30 44 34 20 50 8 Z" />
      <circle cx="50" cy="36" r="8" />
      <path d="M38 52 L24 66 L38 66 M62 52 L76 66 L62 66" />
      <path d="M44 74 L42 90 M50 74 V94 M56 74 L58 90" />
    </>
  ),
  auto: (
    <>
      <rect x="8" y="40" width="20" height="20" rx="5" />
      <rect x="72" y="14" width="20" height="20" rx="5" />
      <rect x="72" y="66" width="20" height="20" rx="5" />
      <circle cx="50" cy="50" r="10" />
      <path d="M28 50 H40 M58 44 L72 26 M58 56 L72 74" />
      <path d="M50 44 L46 51 H54 L50 58" />
    </>
  ),
  cred: (
    <>
      <circle cx="50" cy="40" r="24" />
      <circle cx="50" cy="40" r="15" />
      <path d="M50 31 L53 37 L60 38 L55 43 L56 50 L50 47 L44 50 L45 43 L40 38 L47 37 Z" />
      <path d="M36 60 L30 92 L42 84 L48 94 L50 64 M64 60 L70 92 L58 84 L52 94" />
    </>
  ),
  build: (
    <>
      <rect x="8" y="16" width="84" height="68" rx="6" />
      <path d="M8 30 H92" />
      <circle cx="17" cy="23" r="1.5" />
      <circle cx="24" cy="23" r="1.5" />
      <circle cx="31" cy="23" r="1.5" />
      <path d="M38 46 L26 57 L38 68 M62 46 L74 57 L62 68 M54 42 L46 72" />
    </>
  ),
};

export function DeckIcon({ icon }: { icon: CardIcon }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      className="absolute -right-1.5 -bottom-2 h-[118px] w-[118px] opacity-[0.17]"
      fill="none"
      stroke="var(--color-ink)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[icon]}
    </svg>
  );
}

"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { deckCards } from "@/lib/content";
import { DeckIcon } from "./deck-icons";

const SWIPE_PX = 40;

export function TrailDeck() {
  const reduceMotion = useReducedMotion();
  const [order, setOrder] = useState(() => deckCards.map((_, i) => i));
  const startX = useRef<number | null>(null);

  const shuffle = () => setOrder((o) => [...o.slice(1), o[0]]);
  const top = deckCards[order[0]];

  return (
    <div className="relative flex flex-col items-center gap-5 lg:contents">
      {/* All card text, in reading order, for screen readers. */}
      <ul className="sr-only">
        {deckCards.map((c) => (
          <li key={c.wp}>
            {c.wp}, {c.lat}: {c.skill}. {c.line}. {c.tools}.
          </li>
        ))}
      </ul>

      <div
        className="relative h-[236px] w-[290px] touch-pan-y lg:absolute lg:bottom-[-3px] lg:left-[44px]"
        onPointerDown={(e) => {
          startX.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (
            startX.current !== null &&
            Math.abs(e.clientX - startX.current) > SWIPE_PX
          ) {
            shuffle();
          }
          startX.current = null;
        }}
        onPointerCancel={() => {
          startX.current = null;
        }}
      >
        {deckCards.map((c, i) => {
          const p = order.indexOf(i);
          const rotate = p === 0 ? -3 : p * 2.2 - 2;
          return (
            <motion.div
              key={c.wp}
              aria-hidden="true"
              initial={false}
              animate={{ x: p * 5, y: -p * 6, rotate }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }
              }
              style={{ background: c.bg, zIndex: 50 - p }}
              className="absolute top-0 left-0 flex h-[206px] w-[262px] flex-col gap-2 overflow-hidden rounded-[16px] px-5 py-[18px] text-ink shadow-[0_12px_26px_rgba(29,36,32,0.18)] select-none"
            >
              <DeckIcon icon={c.icon} />
              <div className="relative flex justify-between font-mono text-[11px] font-semibold tracking-[0.06em] opacity-85">
                <span>{c.wp}</span>
                <span>{c.lat}</span>
              </div>
              <div className="relative font-display text-[27px] leading-[1.05]">
                {c.skill}
              </div>
              <div className="relative text-[13px] leading-[1.45]">
                {c.line}
              </div>
              <div className="relative mt-auto font-mono text-[10px] tracking-[0.04em] opacity-75">
                {c.tools}
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        Showing {top.skill}, card {order[0] + 1} of {deckCards.length}
      </p>

      <button
        type="button"
        onClick={shuffle}
        className="min-h-11 cursor-pointer rounded-full border-2 border-green bg-bg px-[18px] py-2.5 text-sm font-semibold text-green hover:bg-green hover:text-white lg:absolute lg:right-[-4px] lg:bottom-6 lg:z-[60]"
      >
        Shuffle<span aria-hidden="true"> ↻</span>{" "}
        <span className="font-mono font-normal">
          {order[0] + 1} / {deckCards.length}
        </span>
      </button>
    </div>
  );
}

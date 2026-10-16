"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { about } from "@/lib/content";
import { useDeck } from "./useDeck";

const photos = about.photos;

export function PhotoDeck() {
  const reduceMotion = useReducedMotion();
  const { order, shuffle, swipe } = useDeck(photos.length);
  const top = photos[order[0]];

  return (
    <div className="flex flex-col items-center gap-5 lg:flex-none">
      {/* Photo descriptions for screen readers; the cards themselves are decorative copies. */}
      <ul className="sr-only">
        {photos.map((ph) => (
          <li key={ph.src}>
            {ph.place}: {ph.alt}
          </li>
        ))}
      </ul>

      <div className="relative h-[340px] w-[310px] touch-pan-y" {...swipe}>
        {photos.map((ph, i) => {
          const p = order.indexOf(i);
          const rotate = p === 0 ? -3 : p * 2.2 - 2;
          return (
            <motion.div
              key={ph.src}
              aria-hidden="true"
              initial={false}
              animate={{ x: p * 5, y: -p * 6, rotate }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { duration: 0.42, ease: [0.2, 0.8, 0.2, 1] }
              }
              style={{ zIndex: 50 - p }}
              className="absolute top-6 left-0 flex h-[310px] w-[280px] flex-col gap-2 rounded-[16px] bg-surface p-2.5 shadow-[0_12px_26px_rgba(29,36,32,0.18)] select-none"
            >
              <div className="relative h-[256px] w-full overflow-hidden rounded-[10px] bg-sand">
                <Image
                  src={ph.src}
                  alt=""
                  fill
                  sizes="280px"
                  draggable={false}
                  style={{ objectPosition: ph.position }}
                  className="object-cover"
                />
              </div>
              <div className="flex items-start justify-between gap-3 font-mono text-[11px] font-semibold tracking-[0.04em] text-ink-2">
                <span className="shrink-0 whitespace-nowrap">
                  WP {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-right leading-tight">{ph.place}</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <p className="sr-only" role="status" aria-live="polite">
        Showing {top.place}, photo {order[0] + 1} of {photos.length}
      </p>

      <button
        type="button"
        onClick={shuffle}
        className="min-h-11 cursor-pointer rounded-full border-2 border-green bg-bg px-[18px] py-2.5 text-sm font-semibold text-green hover:bg-green hover:text-white"
      >
        Shuffle<span aria-hidden="true"> ↻</span>{" "}
        <span className="font-mono font-normal">
          {order[0] + 1} / {photos.length}
        </span>
      </button>
    </div>
  );
}

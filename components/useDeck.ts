import { useRef, useState } from "react";

const SWIPE_PX = 40;

// Shared by the hero skill deck and the photo deck: card order, shuffle, and horizontal swipe.
export function useDeck(count: number) {
  const [order, setOrder] = useState(() =>
    Array.from({ length: count }, (_, i) => i),
  );
  const startX = useRef<number | null>(null);

  const shuffle = () => setOrder((o) => [...o.slice(1), o[0]]);

  const swipe = {
    onPointerDown: (e: React.PointerEvent) => {
      startX.current = e.clientX;
    },
    onPointerUp: (e: React.PointerEvent) => {
      if (
        startX.current !== null &&
        Math.abs(e.clientX - startX.current) > SWIPE_PX
      ) {
        shuffle();
      }
      startX.current = null;
    },
    onPointerCancel: () => {
      startX.current = null;
    },
  };

  return { order, shuffle, swipe };
}

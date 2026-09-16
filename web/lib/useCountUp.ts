"use client";

import { useEffect, useRef, useState } from "react";

export interface UseCountUpOptions {
  end: number;
  duration?: number; // seconds
  separator?: string;
  start?: number;
  decimals?: number; // fixed fractional digits (rates: 4)
  delay?: number; // seconds before count starts (stagger)
}

// Count-up animation (mirrors GHL CountUp/number-counter: ease-out cubic, ~1s, from 0 by default).
export function useCountUp({
  end,
  duration = 1,
  separator = ",",
  start = 0,
  decimals = 0,
  delay = 0,
}: UseCountUpOptions): string {
  const [value, setValue] = useState(start);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const t0 = performance.now() + delay * 1000;
    const ms = duration * 1000;

    const tick = (now: number) => {
      const t = Math.min(Math.max((now - t0) / ms, 0), 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = start + (end - start) * eased;
      setValue(current);
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, start, delay]);

  return value.toLocaleString("en-US", {
    useGrouping: separator !== "",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
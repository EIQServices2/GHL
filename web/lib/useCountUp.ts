"use client";

import { useEffect, useRef, useState } from "react";

export interface UseCountUpOptions {
  end: number;
  duration?: number; // seconds
  separator?: string;
  start?: number;
}

/**
 * Count-up animation (mirrors GHL CountUp v2.4.2: start 0, ease-out,
 * grouping separator, ~1s duration). Returns the formatted string.
 */
export function useCountUp({
  end,
  duration = 1,
  separator = ",",
  start = 0,
}: UseCountUpOptions): string {
  const [value, setValue] = useState(start);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const t0 = performance.now();
    const ms = duration * 1000;

    const tick = (now: number) => {
      const t = Math.min((now - t0) / ms, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      const current = start + (end - start) * eased;
      setValue(Math.round(current));
      if (t < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [end, duration, start]);

  return value.toLocaleString("en-US", { useGrouping: separator !== "" });
}

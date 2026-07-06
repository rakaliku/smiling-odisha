import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  /** Target number to count up to */
  end: number;
  /** Duration in milliseconds (default 2000) */
  duration?: number;
  /** Suffix to append (e.g., "+", "K+") */
  suffix?: string;
  /** Prefix to prepend (e.g., "₹") */
  prefix?: string;
}

/**
 * Custom hook that animates a number from 0 to `end` when the element
 * scrolls into view. Only triggers once.
 */
export function useCountUp({ end, duration = 2000, suffix = "", prefix = "" }: UseCountUpOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(`${prefix}0${suffix}`);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    function animate() {
      const start = performance.now();

      function step(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * end);

        setDisplay(`${prefix}${current.toLocaleString("en-IN")}${suffix}`);

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    return () => observer.disconnect();
  }, [end, duration, suffix, prefix]);

  return { ref, display };
}

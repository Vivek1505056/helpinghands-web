"use client";

import { useEffect, useRef, useState } from "react";

const DURATION = 1400; // ms — all counters finish together

const stats = [
  {
    value:   280592,
    prefix:  "$",
    suffix:  "",
    decimals: 0,
    label:   "Value of food rescued",
  },
  {
    value:   99401,
    prefix:  "",
    suffix:  " lbs",
    decimals: 0,
    label:   "Greenhouse gases diverted",
  },
  {
    value:   23805,
    prefix:  "",
    suffix:  " lbs",
    decimals: 0,
    label:   "Total food rescued",
  },
  {
    value:   80,
    prefix:  "",
    suffix:  "+",
    decimals: 0,
    label:   "Families fed weekly",
  },
];

function fmt(n: number, decimals: number): string {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// ease-out expo: steeper exponent = faster blast off, more gradual settle near the target
function easeOut(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -14 * t);
}

export default function StatsSection() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const hasAnimated = useRef(false);
  const rafRef = useRef<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();

        const tick = (now: number) => {
          const progress = Math.min((now - start) / DURATION, 1);
          const eased = easeOut(progress);

          // All stats scaled by the same eased progress → finish simultaneously
          setCounts(stats.map((s) => s.value * eased));

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          } else {
            setCounts(stats.map((s) => s.value));
          }
        };

        rafRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-royalBlue-500 py-20 px-6">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-bold text-white mb-3">Our Impact</h2>
        <div className="w-12 h-1 bg-white/40 mx-auto" />
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-2 gap-12 text-center">
        {stats.map(({ prefix, suffix, decimals, label }, i) => (
          <div key={label} className="flex flex-col items-center gap-3">
            <p className="text-5xl sm:text-6xl font-bold text-white leading-none tabular-nums">
              {prefix}{fmt(counts[i], decimals)}<span className="font-normal text-white ml-1">{suffix}</span>
            </p>
            <p className="text-base font-normal text-royalBlue-100 max-w-[160px]">{label}</p>
          </div>
        ))}
      </div>
      <p className="text-center text-royalBlue-200 text-sm font-normal mt-12 opacity-70">
        Stats reflect the period of September 1, 2024 to February 28, 2025
      </p>
    </section>
  );
}

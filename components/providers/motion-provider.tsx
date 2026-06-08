"use client";

import { domAnimation, LazyMotion, useReducedMotion } from "framer-motion";

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation} strict>
      <div
        data-reduced-motion={prefersReducedMotion ? "true" : "false"}
        className="flex min-h-screen flex-1 flex-col"
      >
        {children}
      </div>
    </LazyMotion>
  );
}

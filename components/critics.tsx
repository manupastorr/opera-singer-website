"use client";

import { m } from "framer-motion";

import { lora } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Critic } from "@/types";

interface CriticsProps {
  critics: Critic[];
}

const Critics = ({ critics }: CriticsProps) => {
  return (
    <div className="flex flex-col gap-4 overflow-x-hidden sm:overflow-x-visible">
      {critics.map((critic, index) => (
        <m.div
          initial={{ x: 50 * (index % 2 === 0 ? -1 : 1), opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          key={critic._id}
        >
          <blockquote className="flex flex-col text-end">
            <q
              className={cn(
                "text-start text-sm text-primary",
                lora.className,
              )}
            >
              {critic.description}
            </q>
            <cite className="text-xxs">- {critic.source}</cite>
          </blockquote>
        </m.div>
      ))}
    </div>
  );
};

export default Critics;

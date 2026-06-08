"use client";

import { useSyncExternalStore } from "react";
import { motion } from "framer-motion";

import { Performance } from "@/types";
import SinglePerformance from "@/components/single-performance";
import { cn } from "@/lib/utils";
import { montserrat } from "@/lib/fonts";

type PerformancesProps = {
  performances: Performance[];
};

const subscribe = () => () => {};

const Performances = ({ performances }: PerformancesProps) => {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);

  // get the year of each performance, if the performance is in the future
  const futurePerformanceYears = [
    ...new Set(
      performances
        .filter((performance) => new Date(performance.firstDate) > new Date())
        .map((performance) => new Date(performance.firstDate).getFullYear()),
    ),
  ].sort((a, b) => a - b);

  const currentDate = new Date();

  return (
    <>
      {isClient &&
        futurePerformanceYears.map((year, index) => (
          <div
            className="w-full flex-col items-center justify-center"
            key={index}
          >
            <section className="container flex flex-col items-start justify-center gap-4 overflow-hidden font-light sm:grid sm:grid-cols-calendar md:gap-10 lg:gap-20">
              <motion.h1
                initial={{
                  x: -100,
                  opacity: 0,
                }}
                animate={{
                  x: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className={cn(
                  "text-4xl font-semibold sm:text-5xl",
                  montserrat.className,
                )}
              >
                {year}
              </motion.h1>

              {/* Future Performances */}
              <div className="flex w-full flex-col gap-8">
                {performances
                  .filter(
                    (performance) =>
                      new Date(performance.firstDate).getFullYear() === year &&
                      new Date(performance.firstDate) > currentDate,
                  )
                  // sort performances by date
                  .sort(
                    (a, b) =>
                      new Date(a.firstDate).getTime() -
                      new Date(b.firstDate).getTime(),
                  )
                  .map((performance, index) => (
                    <SinglePerformance key={index} {...performance} />
                  ))}
              </div>
            </section>
            {
              // add a horizontal rule between each year, except the last
              index !== futurePerformanceYears.length - 1 && (
                <hr className="container mt-8 w-full opacity-50" />
              )
            }
          </div>
        ))}
    </>
  );
};

export default Performances;

"use client";

import { useSyncExternalStore } from "react";
import { m } from "framer-motion";

import { Performance } from "@/types";
import SinglePerformance from "@/components/single-performance";
import { cn } from "@/lib/utils";
import { montserrat } from "@/lib/fonts";

type PerformancesProps = {
  performances: Performance[];
};

const subscribe = () => () => {};

function groupFuturePerformancesByYear(performances: Performance[]) {
  const currentDate = new Date();
  const performancesByYear = new Map<number, Performance[]>();

  for (const performance of performances) {
    const performanceDate = new Date(performance.firstDate);
    if (performanceDate <= currentDate) {
      continue;
    }

    const year = performanceDate.getFullYear();
    const yearPerformances = performancesByYear.get(year) ?? [];
    yearPerformances.push(performance);
    performancesByYear.set(year, yearPerformances);
  }

  const futurePerformanceYears = [...performancesByYear.keys()].toSorted(
    (a, b) => a - b,
  );

  return futurePerformanceYears.map((year) => ({
    year,
    performances: (performancesByYear.get(year) ?? []).toSorted(
      (a, b) =>
        new Date(a.firstDate).getTime() - new Date(b.firstDate).getTime(),
    ),
  }));
}

const Performances = ({ performances }: PerformancesProps) => {
  const isClient = useSyncExternalStore(subscribe, () => true, () => false);
  const groupedPerformances = groupFuturePerformancesByYear(performances);

  return (
    <>
      {isClient &&
        groupedPerformances.map(({ year, performances: yearPerformances }, index) => (
          <div
            className="w-full flex-col items-center justify-center"
            key={year}
          >
            <section className="container flex flex-col items-start justify-center gap-4 overflow-hidden font-light sm:grid sm:grid-cols-calendar md:gap-10 lg:gap-20">
              <m.h1
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
              </m.h1>

              <div className="flex w-full flex-col gap-8">
                {yearPerformances.map((performance) => (
                  <SinglePerformance key={performance._id} {...performance} />
                ))}
              </div>
            </section>
            {index !== groupedPerformances.length - 1 && (
              <hr className="container mt-8 w-full opacity-50" />
            )}
          </div>
        ))}
    </>
  );
};

export default Performances;

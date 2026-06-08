"use client";

import { m } from "framer-motion";

import { montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Repertoire } from "@/types";

type RepertoireRenderProps = {
  repertoires: Repertoire[];
};

const RepertoireRender = ({ repertoires }: RepertoireRenderProps) => {
  return (
    <section className="container mx-auto flex flex-1 flex-col gap-12 overflow-x-hidden py-8 sm:gap-16 sm:px-16">
      <div className="grid gap-6 sm:grid-cols-repertoire sm:gap-8 lg:gap-16">
        <m.h1
          initial={{
            x: -50,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          className={cn(
            "text-5xl font-semibold text-primary sm:justify-self-end",
            montserrat.className,
          )}
        >
          {repertoires[0].type}
        </m.h1>
        <ul className="flex flex-1 flex-col gap-4">
          {repertoires.map((item, index) => (
            <m.li
              initial={{
                x: 50 + 50 * index * 0.2,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              key={item._id}
              className="group"
            >
              <h2 className="text-xl font-semibold">
                {`${item.composerFirstName} ${item.composerLastName}`}
              </h2>
              <div>
                {item.compositions.map((piece) => (
                  <p key={`${item._id}-${piece.title}`} className="font-light opacity-50">
                    {piece.title}
                    {piece.role &&
                      piece.role.length > 0 &&
                      piece.role.filter((item) => item.trim() !== "").length >
                        0 && (
                        <>
                          {" / "}
                          {piece.role
                            .filter((item) => item.trim() !== "") // Remove empty strings
                            .join(", ")}
                        </>
                      )}
                  </p>
                ))}
              </div>
            </m.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RepertoireRender;

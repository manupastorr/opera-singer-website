"use client";

import { m } from "framer-motion";
import { useTheme } from "next-themes";
import Image from "next/image";

import { lora, montserrat } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Profile } from "@/types";

type Props = {
  profile: Profile;
};

export default function Hero({ profile }: Props) {
  const { theme } = useTheme();

  return (
    <main className="relative mx-auto grid w-full flex-1 items-center justify-items-end overflow-y-auto overflow-x-hidden md:container md:grid-cols-2">
      <m.section
        initial={{
          x: 300,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        className="z-10 mx-auto flex flex-col items-start gap-3 self-center overflow-hidden px-8 sm:mx-0 sm:justify-self-center sm:px-0 md:ml-auto"
      >
        <h1
          className={cn(
            "text-6xl font-semibold uppercase sm:text-8xl",
            montserrat.className,
          )}
        >
          {/* Render the first name with equal-width letters */}
          <EqualWidthName name={profile.firstName} />
          <br />
          {/* Render the last name with equal-width letters */}
          <EqualWidthName name={profile.lastName} />
        </h1>
        <h2
          className={cn(
            "left-0 text-3xl font-semibold text-primary sm:text-5xl",
            montserrat.className,
          )}
        >
          {profile.voiceType}
        </h2>
        <p
          className={cn(
            "flex max-w-[250px] flex-col gap-1 text-3xl sm:max-w-[380px]",
            lora.className,
          )}
        >
          {profile.quote}
        </p>
        <span className="opacity-50">{profile.quoteSource}</span>
      </m.section>
      <m.div
        className={cn(
          "absolute right-0 overflow-hidden",
          theme === "light" ? "bottom-[91.2px] sm:bottom-[59.2px]" : "top-0",
        )}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
      >
        <Image
          priority
          src={
            theme === "light"
              ? profile.heroLightImage.image
              : profile.heroDarkImage.image
          }
          width={2235}
          height={1705}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
          alt={
            theme === "light"
              ? profile.heroLightImage.image
              : profile.heroDarkImage.image
          }
          className="xl:max-h-screen-85 mt-[88px] max-w-screen-sm translate-x-52 object-cover opacity-90 sm:translate-x-28 md:max-w-screen-sm lg:translate-x-0 xl:block xl:w-full xl:max-w-screen-xl"
        />
      </m.div>
    </main>
  );
}

// A reusable component to render a name with equal-width letters
function EqualWidthName({ name }: { name: string }) {
  return (
    <>
      {name.split("").map((letter, index) => (
        <div key={`${name}-${letter}-${index}`} className="inline-block w-11 mx-[2px] sm:w-[72px]">
          <span className="flex w-full justify-center">{letter}</span>
        </div>
      ))}
    </>
  );
}

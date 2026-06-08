"use client";

import { useTheme } from "next-themes";
import { m } from "framer-motion";

import { About } from "@/types";
import Image from "next/image";

interface AboutImageProps {
  about: About;
}

const AboutImage = ({ about }: AboutImageProps) => {
  const { theme } = useTheme();
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
      }}
      className="relative max-h-[400px] self-end overflow-hidden object-cover"
    >
      <Image
        priority
        src={
          theme === "light"
            ? about.aboutImageLight.image
            : about.aboutImageDark.image
        }
        width={2235}
        height={1705}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        alt={
          theme === "light"
            ? about.aboutImageLight.image
            : about.aboutImageDark.image
        }
        className="object-cover"
      />
    </m.div>
  );
};

export default AboutImage;

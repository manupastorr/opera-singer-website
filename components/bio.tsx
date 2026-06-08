"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { m } from "framer-motion";

import { type Bio } from "@/types";

interface BioProps {
  bio: Bio;
}

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-base">{children}</p>,
  },
};

const Bio = ({ bio }: BioProps) => {
  return (
    <m.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="text-justify"
    >
      <PortableText components={components} value={bio} />
    </m.div>
  );
};

export default Bio;

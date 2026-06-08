import { PortableText } from "@portabletext/react";

import { createPageMetadata } from "@/lib/page-metadata";
import { getLegal } from "@/sanity/sanity.query";

export const metadata = createPageMetadata("Impressum");

const Impressum = async () => {
  const [, imprint] = await getLegal();

  return <>{imprint && <PortableText value={imprint.content} />}</>;
};

export default Impressum;

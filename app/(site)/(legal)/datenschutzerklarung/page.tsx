import { PortableText } from "@portabletext/react";

import { createPageMetadata } from "@/lib/page-metadata";
import { getLegal } from "@/sanity/sanity.query";

export const metadata = createPageMetadata("Datenschutzerklärung");

const Datenschutzerklärung = async () => {
  const [privacyPolicy] = await getLegal();

  return (
    <>
      <PortableText value={privacyPolicy.content} />
    </>
  );
};

export default Datenschutzerklärung;

import RepertoireRender from "@/components/repertoire-render";
import { createPageMetadata } from "@/lib/page-metadata";
import { getConcert } from "@/sanity/sanity.query";

export const metadata = createPageMetadata("Concert");

const Concert = async () => {
  const concerts = await getConcert();
  return (
    <>
      <RepertoireRender repertoires={concerts} />
    </>
  );
};

export default Concert;

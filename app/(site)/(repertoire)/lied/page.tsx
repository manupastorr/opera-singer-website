import RepertoireRender from "@/components/repertoire-render";
import { createPageMetadata } from "@/lib/page-metadata";
import { getLied } from "@/sanity/sanity.query";

export const metadata = createPageMetadata("Lied");

const Lied = async () => {
  const lieds = await getLied();
  return <RepertoireRender repertoires={lieds} />;
};

export default Lied;

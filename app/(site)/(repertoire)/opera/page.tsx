import RepertoireRender from "@/components/repertoire-render";
import { createPageMetadata } from "@/lib/page-metadata";
import { getOpera } from "@/sanity/sanity.query";

export const metadata = createPageMetadata("Opera");

const Opera = async () => {
  const operas = await getOpera();
  return <RepertoireRender repertoires={operas} />;
};

export default Opera;

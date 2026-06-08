import Gallery from "@/components/gallery";
import { createPageMetadata } from "@/lib/page-metadata";
import { getGallery } from "@/sanity/sanity.query";

export const metadata = createPageMetadata("Portrait");

const Portrait = async () => {
  const [portrait] = await getGallery();

  const pictures = portrait.images;

  return <Gallery pictures={pictures} />;
};

export default Portrait;

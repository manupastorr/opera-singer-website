import Gallery from "@/components/gallery";
import { createPageMetadata } from "@/lib/page-metadata";
import { getGallery } from "@/sanity/sanity.query";

export const metadata = createPageMetadata("On Stage");

const OnStage = async () => {
  const [, onStage] = await getGallery();

  const pictures = onStage.images;

  return <Gallery pictures={pictures} />;
};

export default OnStage;

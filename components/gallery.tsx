import { Picture } from "@/types";

import ImageContainer from "@/components/image-container";

type GalleryProps = {
  pictures: Picture[];
};

export default async function Gallery({ pictures }: GalleryProps) {
  if (!pictures) {
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;
  }

  return (
    <section className="my-3 grid grid-cols-gallery gap-2 px-2">
      {pictures.map((picture) => (
        <ImageContainer photo={picture} key={picture.image} />
      ))}
    </section>
  );
}

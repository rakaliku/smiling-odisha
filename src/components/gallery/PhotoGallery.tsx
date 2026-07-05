import { useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { galleryPhotos } from "@/data/galleryPhotos";
import GalleryCard, { type GalleryPhoto } from "./GalleryCard";
import PhotoLightbox from "./PhotoLightbox";

const PhotoGallery = () => {
  const [active, setActive] = useState<GalleryPhoto | null>(null);

  const sorted = useMemo(
    () => [...galleryPhotos].sort((a, b) => b.createdAt - a.createdAt),
    []
  );

  return (
    <section className="bg-gradient-warm py-20 relative">
      <div className="absolute inset-0 pattachitra-pattern opacity-30" />
      <div className="container relative">
        <div className="mb-10">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Moments from the Field"
            subtitle="Our social work captured across Odisha."
            align="left"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {sorted.map((photo) => (
            <GalleryCard
              key={photo.id}
              photo={photo}
              onClick={() => setActive(photo)}
            />
          ))}
        </div>
      </div>

      <PhotoLightbox photo={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default PhotoGallery;

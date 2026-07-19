import { useEffect, useMemo, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { galleryPhotos } from "@/data/galleryPhotos";
import GalleryCard, { type GalleryPhoto } from "./GalleryCard";
import PhotoLightbox from "./PhotoLightbox";
import { useLanguage } from "@/i18n/LanguageContext";

interface PhotoGalleryProps {
  photos?: GalleryPhoto[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  display?: "grid" | "carousel";
  autoPlayInterval?: number;
}

const PhotoGallery = ({
  photos = galleryPhotos,
  eyebrow = "Photo Gallery",
  title = "Moments from the Field",
  subtitle = "Our social work captured across Odisha.",
  display = "grid",
  autoPlayInterval = 3500,
}: PhotoGalleryProps) => {
  const { t } = useLanguage();
  const [active, setActive] = useState<GalleryPhoto | null>(null);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [isPaused, setIsPaused] = useState(false);

  const sorted = useMemo(
    () => [...photos].sort((a, b) => b.createdAt - a.createdAt),
    [photos]
  );

  useEffect(() => {
    if (
      display !== "carousel" ||
      !carouselApi ||
      isPaused ||
      active ||
      sorted.length < 2 ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setInterval(() => {
      carouselApi.scrollNext();
    }, autoPlayInterval);

    return () => window.clearInterval(timer);
  }, [active, autoPlayInterval, carouselApi, display, isPaused, sorted.length]);

  return (
    <section className="bg-gradient-warm py-20 relative">
      <div className="absolute inset-0 pattachitra-pattern opacity-30" />
      <div className="container relative">
        <div className="mb-10">
          <SectionHeading
            eyebrow={t(eyebrow)}
            title={t(title)}
            subtitle={t(subtitle)}
            align="left"
          />
        </div>

        {display === "carousel" ? (
          <Carousel
            setApi={setCarouselApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
            aria-label={`${t(title)} ${t("photo gallery")}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={() => setIsPaused(false)}
          >
            <CarouselContent className="-ml-5">
              {sorted.map((photo) => (
                <CarouselItem
                  key={photo.id}
                  className="basis-[85%] pl-5 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <GalleryCard photo={photo} onClick={() => setActive(photo)} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-auto right-12 -top-6 translate-y-0 bg-card/90 shadow-soft" />
            <CarouselNext className="right-0 -top-6 translate-y-0 bg-card/90 shadow-soft" />
          </Carousel>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {sorted.map((photo) => (
              <GalleryCard
                key={photo.id}
                photo={photo}
                onClick={() => setActive(photo)}
              />
            ))}
          </div>
        )}
      </div>

      <PhotoLightbox photo={active} onClose={() => setActive(null)} />
    </section>
  );
};

export default PhotoGallery;

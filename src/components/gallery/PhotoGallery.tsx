import { useEffect, useMemo, useState } from "react";
import { ImageIcon } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import GalleryCard, { type GalleryPhoto } from "./GalleryCard";
import UploadPhotoDialog from "./UploadPhotoDialog";
import PhotoLightbox from "./PhotoLightbox";
import { toast } from "sonner";

const STORAGE_KEY = "smiling-odisha:gallery";

const loadPhotos = (): GalleryPhoto[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
};

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);
  const [active, setActive] = useState<GalleryPhoto | null>(null);

  useEffect(() => {
    setPhotos(loadPhotos());
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch {
      toast.error("Couldn't save gallery — storage full");
    }
  }, [photos]);

  const sorted = useMemo(
    () => [...photos].sort((a, b) => b.createdAt - a.createdAt),
    [photos],
  );

  const handleAdd = (photo: GalleryPhoto) => setPhotos((prev) => [photo, ...prev]);
  const handleDelete = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id));
    toast.success("Photo removed");
  };

  return (
    <section className="bg-gradient-warm py-20 relative">
      <div className="absolute inset-0 pattachitra-pattern opacity-30" />
      <div className="container relative">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Moments from the Field"
            subtitle="Stories, smiles and milestones captured across Odisha."
            align="left"
          />
          <UploadPhotoDialog onAdd={handleAdd} />
        </div>

        {sorted.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border/60 bg-card/60 backdrop-blur py-16 px-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/20 mb-4">
              <ImageIcon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold">No photos yet</h3>
            <p className="text-sm text-muted-foreground mt-1.5 max-w-md mx-auto">
              Be the first to share a moment from a recent initiative. Click "Upload Photo" to begin.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {sorted.map((photo) => (
              <GalleryCard
                key={photo.id}
                photo={photo}
                onClick={() => setActive(photo)}
                onDelete={() => handleDelete(photo.id)}
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

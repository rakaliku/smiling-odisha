import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { GalleryPhoto } from "./GalleryCard";

interface PhotoLightboxProps {
  photo: GalleryPhoto | null;
  onClose: () => void;
}

const PhotoLightbox = ({ photo, onClose }: PhotoLightboxProps) => {
  return (
    <Dialog open={!!photo} onOpenChange={(o) => !o && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-card">
        {photo && (
          <>
            <div className="bg-foreground/95 flex items-center justify-center max-h-[75vh]">
              <img
                src={photo.src}
                alt={photo.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
            <div className="p-6">
              <DialogTitle className="font-display text-2xl">{photo.title}</DialogTitle>
              {photo.description && (
                <DialogDescription className="mt-2 text-base text-muted-foreground">
                  {photo.description}
                </DialogDescription>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PhotoLightbox;

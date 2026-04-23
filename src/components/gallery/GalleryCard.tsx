import { Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export interface GalleryPhoto {
  id: string;
  src: string;
  title: string;
  description?: string;
  createdAt: number;
}

interface GalleryCardProps {
  photo: GalleryPhoto;
  onClick: () => void;
  onDelete: () => void;
}

const GalleryCard = ({ photo, onClick, onDelete }: GalleryCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border/60 hover:shadow-warm transition-all">
      <button
        type="button"
        onClick={onClick}
        className="relative block w-full aspect-square overflow-hidden"
      >
        <img
          src={photo.src}
          alt={photo.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      <CardContent className="p-4 flex items-start justify-between gap-2">
        <div className="min-w-0">
          <h4 className="font-display font-semibold text-base truncate">{photo.title}</h4>
          {photo.description && (
            <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{photo.description}</p>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onDelete}
          aria-label="Delete photo"
          className="h-8 w-8 shrink-0 text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;

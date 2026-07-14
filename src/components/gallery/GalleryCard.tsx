import { Card, CardContent } from "@/components/ui/card";

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
}

const GalleryCard = ({ photo, onClick }: GalleryCardProps) => {
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
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.svg";
          }}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>
      <CardContent className="p-4">
        <div className="min-w-0">
          <h4 className="font-display font-semibold text-base truncate">{photo.title}</h4>
          {photo.description && (
            <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">{photo.description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;

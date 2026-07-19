import { useRef, useState } from "react";
import { ImagePlus, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import type { GalleryPhoto } from "./GalleryCard";
import { useLanguage } from "@/i18n/LanguageContext";

interface UploadPhotoDialogProps {
  onAdd: (photo: GalleryPhoto) => void;
}

const MAX_BYTES = 4 * 1024 * 1024; // 4MB to keep localStorage healthy

const UploadPhotoDialog = ({ onAdd }: UploadPhotoDialogProps) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  const reset = () => {
    setTitle("");
    setDescription("");
    setPreview(null);
    if (fileRef.current) fileRef.current.value = "";
  };

  const handleFile = (file: File | undefined) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      toast.error(t("Please select an image file"));
      return;
    }
    if (file.size > MAX_BYTES) {
      toast.error(t("Image too large. Max 4MB."));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!preview) {
      toast.error(t("Please select an image"));
      return;
    }
    if (!title.trim()) {
      toast.error(t("Please add a title"));
      return;
    }
    onAdd({
      id: crypto.randomUUID(),
      src: preview,
      title: title.trim(),
      description: description.trim() || undefined,
      createdAt: Date.now(),
    });
    toast.success(t("Photo added to gallery"));
    reset();
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        setOpen(o);
        if (!o) reset();
      }}
    >
      <DialogTrigger asChild>
        <Button className="rounded-full bg-gradient-hero hover:opacity-90 shadow-warm">
          <Upload className="h-4 w-4 mr-2" /> {t("Upload Photo")}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">{t("Share a Moment")}</DialogTitle>
          <DialogDescription>
            {t("Add a photo from your social work activities. Stored locally on your device.")}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="photo">{t("Image *")}</Label>
            <Input
              id="photo"
              ref={fileRef}
              type="file"
              accept="image/*"
              onChange={(e) => handleFile(e.target.files?.[0])}
              className="mt-1.5"
            />
          </div>

          {preview ? (
            <div className="rounded-lg overflow-hidden border border-border/60 bg-muted">
              <img src={preview} alt={t("Preview")} className="w-full max-h-64 object-contain" />
            </div>
          ) : (
            <div className="rounded-lg border border-dashed border-border/60 bg-muted/40 py-10 flex flex-col items-center justify-center text-muted-foreground">
              <ImagePlus className="h-8 w-8 mb-2 opacity-60" />
              <span className="text-xs">{t("Preview will appear here")}</span>
            </div>
          )}

          <div>
            <Label htmlFor="ptitle">{t("Title *")}</Label>
            <Input
              id="ptitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder={t("Health camp at Koraput")}
              className="mt-1.5"
            />
          </div>

          <div>
            <Label htmlFor="pdesc">{t("Description")}</Label>
            <Textarea
              id="pdesc"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder={t("A short story behind the photo...")}
              className="mt-1.5"
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="rounded-full bg-gradient-hero hover:opacity-90">
              {t("Add to Gallery")}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPhotoDialog;

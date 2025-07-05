import { X } from "lucide-react";
import { Button } from "./ui/button";

type ImageModalProps = {
  open: boolean;
  image: string | null;
  onClose: () => void;
};

export default function ImageModal({ open, image, onClose }: ImageModalProps) {
  if (!open || !image) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <Button
          className="absolute top-6 right-8 text-black hover:text-white rounded-full h-7 w-7 bg-white/85"
          onClick={onClose}
        >
          <X></X>
        </Button>
        <img
          src={image}
          alt="Imagen ampliada"
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
      </div>
    </div>
  );
}

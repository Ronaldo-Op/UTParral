import Imagen from "@/components/ImagenModal";
import { useState } from "react";

function Images({
  len,
  folder,
  ext,
  title,
}: {
  len: number;
  folder: string;
  ext: string;
  title: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pics = Array.from({ length: len }, (_, i) => (i + 1).toString());
  const openModal = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="p-3 my-10">
      <h1 className="text-4xl text-center">{title}</h1>
      <div className="columns-1 xs:columns-2 sm:columns-3 md:columns-4 gap-5 pt-5">
        {pics.map((pic, i) => (
          <img
            key={i}
            src={`assets/${folder}1-${pic}.${ext}`}
            alt="UTP"
            onClick={() => openModal(`assets/${folder}1-${pic}.${ext}`)}
            className="hover:cursor-pointer mb-5 rounded-lg"
          />
        ))}
        <Imagen open={modalOpen} image={selectedImage} onClose={closeModal} />
      </div>
    </div>
  );
}

export default Images;

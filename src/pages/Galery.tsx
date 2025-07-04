import Imagen from "@/components/ImagenModal";
import { useState } from "react";

function Galery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pics = [
    "assets/pics/1-94.jpeg",
    "assets/pics/2-1.jpeg",
    "assets/pics/2-91.jpeg",
    "assets/pics/2-92.jpeg",
    "assets/pics/2-93.jpeg",
    "assets/pics/2-94.jpeg",
    "assets/pics/IMG_4854.jpeg",
    "assets/pics/IMG_4964.jpeg",
  ];

  const openModal = (src: string) => {
    setSelectedImage(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };
  return (
    <div className="p-3">
      <h1 className="text-4xl text-center">Galeria</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 pt-5">
        {pics.map((pic, i) => (
          <img
            key={i}
            src={`${pic}`}
            alt="UTP"
            onClick={() => openModal(pic)}
            className="hover:cursor-pointer"
          />
        ))}
      </div>
      <Imagen open={modalOpen} image={selectedImage} onClose={closeModal} />
    </div>
  );
}

export default Galery;

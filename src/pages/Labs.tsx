import Imagen from "@/components/ImagenModal";
import Viewer360 from "@/components/Viewer360";
import { useState } from "react";
import { RotateCw } from "lucide-react";

function Labs() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const pics = [
    "assets/pics/marketing/1-8.jpeg",
    "assets/pics/marketing/2-5.jpeg",
    "assets/pics/marketing/2-8.jpeg",
    "assets/pics/marketing/3-7.jpeg",
    "assets/pics/marketing/3-83.jpeg",
    "assets/pics/marketing/4-56.jpeg",
    "assets/pics/marketing/5-7.webp",
    "assets/pics/marketing/6-9.jpeg",
    "assets/pics/marketing/9-6.jpeg",
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
      <div className="w-full aspect-16/3 flex justify-center items-center bg-neutral-900">
        <h1 className="text-4xl text-white font-bold">Laboratorios</h1>
      </div>
      <div className="bg-neutral-900 p-5 my-10">
        <h1 className="text-center text-4xl py-5 text-white">Mercadotecnia</h1>
        <div className="columns-1 xs:columns-2 sm:columns-3 md:columns-4 gap-5 pt-5">
          {pics.map((pic, i) => (
            <img
              key={i}
              src={`${pic}`}
              alt="UTP"
              onClick={() => openModal(pic)}
              className="hover:cursor-pointer mb-5"
            />
          ))}
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white text-center my-5">
            Vista 360°
          </h1>
          <Viewer360 liga={"360.jpg"}></Viewer360>
        </div>
      </div>
      <div className="bg-neutral-900 p-5 mb-10">
        <h1 className="text-center text-4xl py-5 text-white">Camara Gessell</h1>
        <div className="columns-1 xs:columns-2 sm:columns-3 md:columns-4 gap-5 pt-5">
          {pics.map((pic, i) => (
            <img
              key={i}
              src={`${pic}`}
              alt="UTP"
              onClick={() => openModal(pic)}
              className="hover:cursor-pointer mb-5"
            />
          ))}
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white text-center my-5">
            Vista 360°
          </h1>
          <Viewer360 liga={"360_1.jpg"}></Viewer360>
        </div>
      </div>
      <Imagen open={modalOpen} image={selectedImage} onClose={closeModal} />
    </div>
  );
}

export default Labs;

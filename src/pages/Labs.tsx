import Imagen from "@/components/ImagenModal";
import Viewer360 from "@/components/Viewer360";
import { useState } from "react";

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
  const picsGess = [
    "assets/pics/gessell/1-1.jpeg",
    "assets/pics/gessell/1-2.jpeg",
    "assets/pics/gessell/1-3.jpeg",
    "assets/pics/gessell/1-4.jpeg",
    "assets/pics/gessell/1-5.jpeg",
    "assets/pics/gessell/1-6.jpeg",
    "assets/pics/gessell/1-7.jpeg",
    "assets/pics/gessell/1-8.jpeg",
    "assets/pics/gessell/1-9.jpeg",
    "assets/pics/gessell/2-1.jpeg",
    "assets/pics/gessell/2-2.jpeg",
    "assets/pics/gessell/2-3.jpeg",
    "assets/pics/gessell/2-4.jpeg",
    "assets/pics/gessell/2-5.jpeg",
    "assets/pics/gessell/2-6.jpeg",
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
    <div>
      <div className="relative w-full aspect-16/6 shadow-md">
        <img
          src="assets/pics/marketing/6-9.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 text-white w-full text-center text-6xl">
          Laboratorios
        </h1>
      </div>

      <div className="p-5 my-10 border-b-2">
        <h1 className="text-4xl py-3">Marketing</h1>
        <hr />
        <div className="columns-1 xs:columns-2 sm:columns-3 md:columns-4 gap-5 pt-5">
          {pics.map((pic, i) => (
            <img
              key={i}
              src={`${pic}`}
              alt="UTP"
              onClick={() => openModal(pic)}
              className="hover:cursor-pointer mb-5 shadow-md rounded-lg"
            />
          ))}
        </div>
        <Viewer360 liga={"360.jpg"}></Viewer360>
      </div>

      <div className="p-5 mb-10 border-b-2">
        <h1 className="text-4xl py-3">Camara Gessell</h1>
        <hr />
        <div className="columns-1 xs:columns-2 sm:columns-3 md:columns-4 gap-5 pt-5">
          {picsGess.map((pic, i) => (
            <img
              key={i}
              src={`${pic}`}
              alt="UTP"
              onClick={() => openModal(pic)}
              className="hover:cursor-pointer mb-5 rounded-lg"
            />
          ))}
        </div>
        <Viewer360 liga={"360_1.jpg"}></Viewer360>
      </div>
      <Imagen open={modalOpen} image={selectedImage} onClose={closeModal} />
    </div>
  );
}

export default Labs;

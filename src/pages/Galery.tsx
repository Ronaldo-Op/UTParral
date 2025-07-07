import Images from "@/components/Images";
import PageTitle from "@/components/PageTitle";
import Section from "@/components/Section";

function Galery() {
  return (
    <div className="">
      <PageTitle
        img="assets/pics/travels/empLat/1-2.webp"
        name="galería"
      ></PageTitle>
      <Images
        ext="jpeg"
        folder="pics/galery/activities/"
        len={8}
        title="actividades"
      ></Images>
      <Section
        img="assets/pics/galery/1-1.webp"
        title="
Licenciadas en Gestión de Negocios y Proyectos"
      ></Section>
      <Images
        ext="webp"
        folder="pics/galery/integradora/"
        len={15}
        title="Presentación de Integradora (Licenciatura)"
      ></Images>
      <Images
        ext="webp"
        folder="pics/galery/estadias/"
        len={16}
        title="Estadías Profesionales 2023"
      ></Images>
      <Images
        ext="webp"
        folder="pics/galery/proyectos/"
        len={20}
        title="proyectos"
      ></Images>
    </div>
  );
}

export default Galery;

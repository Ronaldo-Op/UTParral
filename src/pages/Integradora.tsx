import Images from "@/components/Images";
import PageTitle from "@/components/PageTitle";
import Proyectos from "@/components/Proyectos";
import Section from "@/components/Section";

function Integradora() {
  return (
    <div>
      <PageTitle
        img="assets/pics/integradoras/integradoras/int.jpg"
        name="integradoras"
      ></PageTitle>
      <Section
        img="assets/pics/integradoras/1-1.webp"
        title="Proyectos de Integradoras"
      >
        <p>
          Los jóvenes de la carrera de Licenciatura en Gestión de Proyectos,
          presentaron sus proyectos de integradora, donde los alumnos aplicaron
          todos los conocimientos adquiridos en cada una sus materias, en
          presencia de toda la comunidad UTP, así como también padres de
          familia. También se contó con la presencia de nuestra rectora la
          Doctora Betty Chávez Mata y el Doctor Miguel Ángel Maldonado Miranda
          director de Innovación y Desarrollo Económico del gobierno de
          Parral.Gestión de Negocios y proyectos, innovación constante.
        </p>
      </Section>
      <Proyectos></Proyectos>
      <Images
        ext="webp"
        folder="pics/integradoras/galery/"
        len={15}
        title="galería"
      ></Images>
    </div>
  );
}

export default Integradora;

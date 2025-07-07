import Images from "@/components/Images";
import Section from "@/components/Section";
import Title from "@/components/PageTitle";

function Travels() {
  return (
    <div>
      <Title
        img="assets/pics/travels/empLat/1-39.webp"
        name="visitas industriales"
      ></Title>

      <Images
        ext="webp"
        folder="pics/travels/empLat/"
        len={48}
        title="Congreso Emprende Latino 2023"
      ></Images>

      <Section
        title="Visita industrial BAFAR"
        img="assets/pics/travels/1-01.webp"
      >
        <p>
          El pasado viernes 7 de Julio los grupos de Despresurizado de FEP31D,
          BFEP61D Y LGNP91D de la carreta de Gestión de Negocios y Proyectos
          acudió a una visita industrial a la ciudad de Chihuahua a la empresa
          BAFAR, dónde se les dio una plática muy importante del modelo de
          negocios que maneja esta empresa 100% Chihuahuense, así como la
          explicación y recorrido por las instalaciones del proceso de
          producción en su planta. En esta plática también se comentó como se
          han expandido a otros mercados con sus productos a nivel nacional e
          internacional y lo importante que es tener presencia en la sociedad a
          través de las fundaciones que maneja para apoyo en diferentes rubros,
          y también se habló de los procesos de consultoría con empresas
          externas para eficientar procesos de control interno y posicionar a la
          empresa altamente competitiva.
        </p>
      </Section>
      <Section
        title="Auditoria Superior del Estado en la ciudad de Chihuahua "
        img="assets/pics/travels/1-02.webp"
      >
        <p>
          Los estudiantes de la carrera de Gestión de Negocios y Proyectos, UTP,
          acudieron a curso de contabilidad gubernamental en las instalaciones
          de la Auditoria Superior del Estado en la ciudad de Chihuahua donde se
          les platicó acerca de los lineamientos y procedimientos para llevarla
          a cabo, así como de presupuestos de Ingresos y Egresos de los entes
          públicos del gobierno estatal y municipal.
        </p>
      </Section>

      <Images
        len={9}
        folder={"pics/travels/audSup/"}
        ext={"webp"}
        title="Auditoria Superior del Estado en la ciudad de Chihuahua "
      ></Images>

      <Section
        title="Visita Industrial, MONTERREY 2023"
        img="assets/pics/travels/1-03.webp"
      >
        <p>
          Los alumnos de la carrera de Gestión de Proyectos se encuentran en la
          ciudad de Monterrey, Nuevo León en visita industrial, donde visitaran
          empresas de gran prestigio a nivel nacional e internacional, como lo
          son:
        </p>
        <ul className="text-justify">
          <li className="flex items-start gap-2">
            <span className="text-lg">›</span>
            <span>Coca Cola FEMSA</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">›</span>
            <span>Parque Fundidora</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">›</span>
            <span>Estadio Rayados de Monterrey</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-lg">›</span>
            <span>Cervecería Cuauhtémoc - Moctezuma </span>
          </li>
        </ul>
      </Section>
    </div>
  );
}

export default Travels;

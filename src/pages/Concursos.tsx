import Images from "@/components/Images";
import Section from "@/components/Section";

function Concursos() {
  return (
    <div>
      <Section
        img="assets/pics/concursos/1-1.webp"
        title="consurso nacional de innovación y emprendimiento"
      >
        <p>
          Nuestros Lobos Grises de la carrera de Licenciatura en Gestión de
          Negocios y Proyectos de Tercer cuatrimestre, participaron con su
          proyecto "Fit Meat" en el evento a nivel nacional de CONIES, en la
          cual la cede fue la ciudad de Coatzacoalcos, Veracruz.
        </p>
        <blockquote className="relative p-6 pl-12 italic font-serif border-l-4 border-green-800">
          <span className="absolute top-2 left-4 text-6xl leading-none select-none">
            “
          </span>
          Una experiencia inolvidable.
        </blockquote>
      </Section>
      <Images
        ext="webp"
        folder="pics/concursos/nacionales/"
        len={9}
        title="nacionales"
      ></Images>
      <Section
        img="assets/pics/concursos/1-2.webp"
        title="CONGRESO NACIONAL 2022 EN EL ESTADO DE MÉXICO"
      >
        <p>
          "Retos y perspectivas del Mundo de la Administración Pospandemia" 16,
          17 y 18 de Noviembre.
        </p>
        <p>
          Nuestros alumnos acudieron al evento nacional de las Universidades
          Tecnológicas y Politécnicas, donde pudieron acceder a conferencias
          magistrales y temáticas, concursos de emprendedores y simuladores de
          negocios.
        </p>
        <blockquote className="relative p-6 pl-12 italic font-serif border-l-4 border-green-800">
          <span className="absolute top-2 left-4 text-6xl leading-none select-none">
            “
          </span>
          Y con la grata participación del equipo representativo de la
          licenciatura en Gestión de Negocios y Proyectos, en el reto de
          simulador Gerencia Financiera, en el cual lograron el segundo lugar a
          nivel nacional.
        </blockquote>
      </Section>
      <Section
        img="assets/pics/concursos/1-3.webp"
        title="Equipo Ganador del 2do lugar Nacional "
      >
        <p>simulador Gerencia Financiera</p>
      </Section>
      <Images
        ext="webp"
        folder="pics/concursos/galery/"
        len={15}
        title="galería"
      ></Images>
    </div>
  );
}

export default Concursos;

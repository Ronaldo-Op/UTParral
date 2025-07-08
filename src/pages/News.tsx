import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function News() {
  const news = [
    {
      title: "visita al Vivero Forestal",
      content:
        "Estudiantes de Agricultura Sustentable y Protegida realizaron una visita al Vivero Forestal del Ing. Javier Navar, ubicado en el municipio de San Francisco del Oro, como parte de su formación en la materia de Sistemas de Producción Agrícola Sustentable.",
      img: "assets/pics/news/visita f.jpg",
    },
    {
      title: "Gira académica",
      content:
        "Estudiantes de 9.º cuatrimestre de la carrera de Agricultura Sustentable y Protegida, acompañados por la docente Laysa Saucedo, realizaron una enriquecedora gira académica por diversas la Comarca Lagunera.",
      img: "assets/pics/news/gira academica.jpg",
    },
    {
      title: "visita cecytech",
      content:
        "Nuestra rectora Betty Chávez asistió a la emotiva ceremonia de graduación del Cecytech Valle de Allende y compartió un mensaje de felicitación a los jóvenes que culminan esta importante etapa en su formación.",
      img: "assets/pics/news/visita cecyt.jpg",
    },
    {
      title: "tercera sesión del consejo directivo",
      content:
        "Este día se llevó a cabo la Tercera Sesión Ordinaria del H. Consejo Directivo de la Universidad Tecnológica de Parral, encabezada por nuestra rectora, Betty Chávez, quien presentó un informe detallado sobre las actividades realizadas en las áreas financiera y académica, así como los avances estratégicos que consolidan el compromiso de nuestra institución con la calidad educativa y el desarrollo integral de nuestra comunidad universitaria.",
      img: "assets/pics/news/sesion.jpg",
    },
    {
      title: "torneo gamer",
      content:
        "La carrera de Tecnologías de la Información llevó a cabo con gran éxito el Torneo Gamer: Secret Level, una actividad pensada para fortalecer la convivencia estudiantil como parte del Programa Institucional de Tutorías y el Programa de Vida Universitaria, en el que participaron estudiantes de todas las carreras.",
      img: "assets/pics/news/torneo g.jpg",
    },
  ];
  return (
    <div>
      <h1>Noticias</h1>
      <hr />
      <div className="p-5 w-full flex flex-col gap-5">
        {news.map((n, i) => (
          <div key={i}>
            <div className="flex flex-col xs:flex-row group hover:cursor-pointer p-5 gap-5">
              <div className="w-2/12 hidden sm:block">7 de julio, 2025</div>
              <div className="w-full xs:w-1/2 sm:w-3/6">
                <h2 className="group-hover:underline">{n.title}</h2>
                <p className="">{n.content}</p>
                <span>Por: Juan Perez</span>
              </div>
              <div className="w-full xs:w-1/2 sm:w-4/12">
                <img src={n.img} alt="" />
              </div>
            </div>
            <hr className="border border-neutral-400" />
          </div>
        ))}
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" className="no-underline-anim" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="no-underline-anim">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="no-underline-anim">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="no-underline-anim">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink className="no-underline-anim">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" className="no-underline-anim" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default News;

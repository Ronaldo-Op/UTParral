import { Button } from "@/components/ui/button";
import fondo from "../assets/city_bg.jpg";
import fondo2 from "../assets/F78A4024.webp";
import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-center justify-center shadow-lg w-full aspect-[16/4] font-bold p-7">
          <h1 className="text-center text-2xl xs:text-4xl">
            Emprendimiento-Licenciatura en Administración
          </h1>
        </div>
        <div
          className="flex bg-cover bg-center aspect-[16/4] w-full items-center justify-center"
          style={{ backgroundImage: `url(${fondo})` }}
        >
          <div className="w-1/2">
            <img src="assets/logo png.webp" alt="" />
          </div>
        </div>
        <div className="flex flex-col justify-center w-full text-center gap-6 bg-neutral-900 p-10">
          <h1 className="text-white text-2xl xs:text-4xl font-bold">
            VEN Y CONOCE NUESTRAS INSTALACIONES
          </h1>
          <span className="text-white">
            VEN Y PERTENECE A LOS LOBOS GRISES DE LA UTP
          </span>
          <img src="assets/LOBO UTP.webp" alt="" className="h-50 m-auto" />
          <h1 className="text-white text-2xl xs:text-4xl font-bold">
            TE ESPERAMOS!!
          </h1>
        </div>
        <div className="w-full aspect-[16/9]">
          <img src="assets/lobos psy.webp" alt="" className="w-full h-full" />
        </div>
        <div className="flex flex-col xs:flex-row py-10 px-6 bg-neutral-900 gap-3">
          <div className="w-full xs:w-1/2 py-5 xs:py-0">
            <img src="assets/F78A3980.webp" alt="" className="w-full h-auto" />
          </div>
          <div className="xs:w-1/2 flex flex-col gap-3">
            <h1 className="text-2xl xs:text-3xl text-white mb-4 font-bold">
              PERFIL DE INGRESO
            </h1>
            <p className="text-white mb-6">
              Para ingresar a la Universidad en la carrera de Técnico Superior
              Universitario en Administración debe cumplir los siguientes
              requisitos:
            </p>

            <ul className="space-y-4 text-white text-justify">
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Haber concluido los estudios de Bachillerato o Preparatoria.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Cubrir la cuota de derecho a examen de admisión y aprobar el
                  examen general de admisión (EXANI).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Cubrir la cuota de inscripción.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Presentar una inclinación y vocación a las ciencias
                  económico-administrativas.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Interés por el ámbito de administración.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Habilidad numérica y comprensión de lectura.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Capacidad para el análisis e interpretación de datos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Pensamiento crítico.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Espíritu creativo, interés por áreas de la empresa
                  relacionadas con la aplicación del respectivo proceso
                  administrativo.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Interés por el crecimiento económico del país.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Contar con alta responsabilidad, iniciativa, respeto y
                  honestidad.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Tener una amplia disposición al trabajo en equipo, hábitos de
                  estudio, comunicación oral y escrita, alto sentido del orden y
                  organización a la búsqueda y consulta de información.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Poseer un alto compromiso para alcanzar el desarrollo de
                  habilidades.
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="flex bg-cover bg-center aspect-[16/10] w-full items-center justify-center"
          style={{ backgroundImage: `url(${fondo2})` }}
        >
          <h1 className="text-white text-2xl xs:text-4xl text-center">
            TE ESTAMOS ESPERANDO
          </h1>
        </div>
        <div className="bg-neutral-900 w-full py-10 px-6 flex flex-col gap-3 items-center">
          <h1 className="text-2xl xs:text-4xl text-white mb-4 text-center font-bold">
            PERFIL DE EGRESO
          </h1>
          <div className="">
            <p className="text-white mb-6">
              El Licenciado en Administración, podrá desenvolverse en:
            </p>
            <ul className="space-y-4 text-white text-justify">
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Empresas privadas dedicadas a la producción y comercialización
                  de bienes o de servicios.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Empresas asociadas al sector financiero de apoyo y fomento a
                  MiPyMES.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Empresas de consultoría empresarial y/o gestión de proyectos.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Su propia empresa.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  La prestación de servicios profesionales de Consultoría
                  Empresarial y de Proyectos de innovación tecnológica,
                  socioeconómicos y de sustentabilidad.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Instituciones gubernamentales de apoyo y fomento al
                  desarrollo.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Organizaciones No Gubernamentales.</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3">
          <img src="assets/F78A3982.webp" alt="" />
          <img src="assets/F78A3988.webp" alt="" />
          <img src="assets/F78A4059.webp" alt="" />
        </div>
        <div className="hidden">
          <h1 className="text-2xl font-bold text-center xs:text-4xl">
            Contacto
          </h1>
          <hr />
          <div className="flex items-center gap-3 p-3">
            <div className="flex flex-col gap-3 w-1/2">
              <span className="font-semibold">
                Licenciatura en Gestión de Negocios y Proyectos - UTP
              </span>
              <span>
                Av. Gral. Jesús Lozoya Solís Km 0.931 Col. Paseos del Almanceña
                C.P. 33827
              </span>
              <div className="flex flex-col">
                <span className="font-semibold">Telefonos</span>
                <hr />
                <a href="tel:+526275232107" className="hover:underline">
                  <span>(627) 523-21-07</span>
                </a>
                <a href="tel:+526275232107" className="hover:underline">
                  <span>(627) 118-64-00</span>
                </a>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">Redes</span>
                <hr />
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/profile.php?id=61556091982393"
                    target="_blank"
                    className="text-blue-500"
                  >
                    <Button
                      variant={"outline"}
                      className="rounded-full w-10 h-10"
                    >
                      <FaFacebook className="text-2xl"></FaFacebook>
                    </Button>
                  </a>
                  <a
                    href="https://www.instagram.com/proyectosutp/"
                    target="_blank"
                    className="text-pink-500"
                  >
                    <Button
                      variant={"outline"}
                      className="rounded-full w-10 h-10"
                    >
                      <FaInstagram className="text-2xl"></FaInstagram>
                    </Button>
                  </a>
                  <a
                    href="https://www.tiktok.com/@licenciatura_en_admin?_t=ZS-8wWG0KbTvPu&_r=1"
                    target="_blank"
                    className="text-black"
                  >
                    <Button
                      variant={"outline"}
                      className="rounded-full w-10 h-10"
                    >
                      <FaTiktok className="text-2xl" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-1/2 aspect-[1/1] rounded-md overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Universidad+Tecnológica+de+Parral,+Hidalgo+del+Parral,+Chihuahua,+México&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

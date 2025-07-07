function Capabilities() {
  const esp = [
    "Gestionar proyectos socioeconómicos, tecnológicos y de innovación mediante la metodología de formulación y evaluación de los mismos para contribuir al desarrollo sostenible de la región",
    "Administrar unidades económicas a través de la gestión de recursos financieros, estrategias mercadológicas, de capital humano y de operaciones, para lograr mayor competitividad en el sector empresarial",
    "Dirigir procesos de consultoría empresarial mediante el diseño e implementación de técnicas de diagnóstico y planes de intervención para el fortalecimiento de la organización",
  ];
  return (
    <div className="">
      <h1>Competencias</h1>
      <hr />

      <div className="flex flex-col xs:flex-row my-5 p-3">
        <div className="w-full xs:w-1/3">
          <img src="assets/pics/capabilities/efecto mahonri.webp" alt="" />
        </div>
        <div className="p-3 w-full xs:w-2/3">
          <h2>Profesionales</h2>
          <p>
            <span className="font-bold">1.</span> Las competencias profesionales
            son las destrezas y actitudes que le permiten desarrollar
            actividades en su área profesional, adaptarse a nuevas situaciones,
            así como transferir, si es necesario, sus conocimientos, habilidades
            y actitudes a áreas profesionales próximas.
          </p>
          <hr className="border-1" />
          <h2>Genéricas</h2>
          <p>
            <span className="font-bold">1.</span> Capacidad de análisis y
            síntesis, habilidades para la investigación básica, las capacidades
            individuales y las destrezas sociales; las habilidades gerenciales y
            las habilidades para comunicarse en un segundo idioma.
          </p>
          <hr className="border-1" />
          <h2>Especificas</h2>
          <p>
            <span className="font-bold">1.</span> Dirigir organizaciones y
            proyectos, a través de la gestión tecnológica, de innovación y de
            recursos, metodologías de evaluación socioeconómica y ambiental,
            herramientas de la administración financiera, y procesos de
            consultoría, para lograr mayor competitividad en el sector
            empresarial y contribuir al desarrollo sostenible de la región.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {esp.map((esp, i) => (
              <div key={i} className="border-l-green-800 border-l-2 p-2">
                <p>
                  <span className="font-bold">{`1.${i + 1}. `}</span>
                  {esp}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mb-5">
        <h1 className="text-white absolute text-7xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Unete!!
        </h1>
        <img src="assets/pics/capabilities/22-2.webp" alt="" />
      </div>

      <div className="py-10 px-6 bg-card mb-5">
        <h2 className="mb-3">escenarios de actuación</h2>
        <hr className="w-full" />
        <div className="flex flex-col xs:flex-row bg-card gap-3 mt-4">
          <div className="xs:w-1/2 flex flex-col gap-3">
            <p className="mb-3">
              El Licenciado en Administración, podrá desenvolverse en:
            </p>
            <ul className="text-justify">
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
                <span>
                  La administración pública en sus niveles de gobierno.
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full xs:w-1/2 py-5 xs:py-0">
            <img
              src="assets/pics/capabilities/33-5.webp"
              alt=""
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>

      <div className="py-10 px-6 bg-card mb-5">
        <h2 className="mb-3">ocupaciones profesionales</h2>
        <hr className="w-full" />
        <div className="flex flex-col xs:flex-row bg-card gap-3 mt-4">
          <div className="w-full xs:w-1/2 py-5 xs:py-0">
            <img
              src="assets/pics/capabilities/21-66.webp"
              alt=""
              className="w-full h-auto"
            />
          </div>
          <div className="xs:w-1/2 flex flex-col gap-3">
            <p className="mb-3">
              El Licenciado en Gestión de Negocios y Proyectos, podrá
              desempeñarse como:
            </p>
            <ul className="text-justify">
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Director de proyectos de inversión.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Director de proyectos de desarrollo sustentable.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Gerente financiero.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Consultor independiente.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Administrador de proyectos.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Administrador de negocios.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Asesor administrativo y financiero.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Prestador de servicios profesionales.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>Coordinador de gestión de la calidad.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">›</span>
                <span>
                  Ejecutivo en áreas gerenciales de Administración, Finanzas,
                  Proyectos.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Capabilities;

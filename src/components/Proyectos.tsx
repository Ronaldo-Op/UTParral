function Proyectos() {
  const proyectos = [
    {
      name: "marketing 360",
      description: "proyecto de mercadotecnia digital",
      img: "assets/pics/integradoras/integradoras/m360.jpg",
      integrantes: ["brandon primo", "debanhy campos", "marian jimenez"],
    },
    {
      name: "happy print",
      description: "proyecto de imprenta",
      img: "assets/pics/integradoras/integradoras/hp.jpg",
      integrantes: [
        "abel monge",
        "fernanda hernandéz",
        "citlali montes",
        "ivan mendoza",
      ],
    },
    {
      name: "tierra viva",
      description: "proyecto de lombrizes",
      img: "assets/pics/integradoras/integradoras/tv.jpg",
      integrantes: [
        "sandra martinez",
        "lucero garcia",
        "angel cano",
        "alan sanchez",
      ],
    },
    {
      name: "krisel crochet",
      description: "proyecto de mantas relajantes",
      img: "assets/pics/integradoras/integradoras/kc.jpg",
      integrantes: ["kristian sislas", "keisy vargas"],
    },
    {
      name: "dulce regalo",
      description: "proyecto de dulces",
      img: "assets/pics/integradoras/integradoras/dr.jpg",
      integrantes: ["estela iturralde", "estefani pereda"],
    },
    {
      name: "velustime",
      description: "proyecto de rastrillos",
      img: "assets/pics/integradoras/integradoras/vt.jpg",
      integrantes: ["arely ramirez", "estefany torres"],
    },
    {
      name: "cleaning company",
      description: "proyecto de limpieza",
      img: "assets/pics/integradoras/integradoras/cc.jpg",
      integrantes: ["alejandro rodriguez", "juan duarte", "alicia rios"],
    },
  ];
  return (
    <div className="p-4">
      <h1>proyectos TSU</h1>
      <hr />
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-3">
        {proyectos.map((pj, i) => (
          <div
            key={i}
            className="rounded-lg border hover:cursor-pointer hover:scale-102 transition-transform duration-200 overflow-hidden bg-card"
          >
            <img
              src={pj.img}
              alt=""
              className="w-full h-full max-h-40 object-cover"
            />
            <div className="p-2">
              <h3 className="text-sm">{pj.name}</h3>
              <p>{pj.description}</p>
              <div className="p-2">
                <p>Integrantes:</p>
                {pj.integrantes.map((n, i) => (
                  <p key={i} className="capitalize">{`> ${n}`}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
        <div className="flex items-center rounded-lg border hover:cursor-pointer hover:scale-102 transition-transform duration-200 bg-card">
          <span className="text-center mx-auto text-2xl">ver todos...</span>
        </div>
      </div>
    </div>
  );
}

export default Proyectos;

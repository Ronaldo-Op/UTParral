import { Link } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { ModeToggle } from "@/components/ModeToggle";

function Navbar() {
  const link = [
    {
      name: "Inicio",
      to: "/",
    },
    {
      name: "Competencias",
      to: "/competencias",
    },
    {
      name: "Laboratorios",
      to: "/laboratorios",
    },
    {
      name: "Fotogalería",
      to: "/galeria",
    },
    {
      name: "Concursos Nacionales",
      to: "/concursos",
    },
    {
      name: "Visitas Industriales",
      to: "/visitas",
    },
    {
      name: "Integradoras",
      to: "/integradoras",
    },
    {
      name: "Reticula",
      to: "/reticula",
    },
    {
      name: "Noticias",
      to: "/noticias",
    },
  ];

  const { toggleSidebar } = useSidebar();

  function useScrolled(threshold = 30) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setScrolled(window.scrollY > threshold);
      };

      handleScroll(); // en caso de que ya esté scrolleado al montar
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrolled;
  }

  const scrolled = useScrolled(100);

  return (
    <>
      <div className="flex flex-col p-2 md:pb-0">
        <div className="border-b-muted-foreground md:border-b p-1 flex justify-between items-center">
          <Link to="/" className="no-underline-anim">
            <img src="assets/lgnp.svg" alt="" className="w-13 h-auto" />
          </Link>
          <div className="flex gap-3">
            <ModeToggle></ModeToggle>
            <Button
              onClick={toggleSidebar}
              variant={"outline"}
              className="md:hidden"
            >
              <Menu></Menu>
            </Button>
          </div>
        </div>
        <div className="gap-3 overflow-hidden scrollbar-thin p-2 whitespace-nowrap hidden md:flex justify-center">
          {link.map((link, i) => {
            return (
              <Link key={i} to={link.to}>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-background/80 backdrop-blur-md shadow-md w-full max-w-7xl p-1`}
      >
        {/* Encabezado con logo y botón hamburguesa */}
        <div className="flex justify-between items-center p-2 md:border-b border-muted-foreground">
          <Link to="/" className="no-underline-anim">
            <img src="assets/lgnp.svg" alt="" className="w-13 h-auto" />
          </Link>
          <div className="flex gap-3">
            <ModeToggle></ModeToggle>
            <Button
              onClick={toggleSidebar}
              variant={"outline"}
              className="md:hidden"
            >
              <Menu></Menu>
            </Button>
          </div>
        </div>

        {/* Navegación scrollable en desktop */}
        <div className="gap-3 p-2 whitespace-nowrap hidden md:flex justify-center">
          {link.map((link, i) => (
            <Link key={i} to={link.to} className="">
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;

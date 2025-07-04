import { Link } from "react-router-dom";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
  const link = [
    {
      name: "Inicio",
      to: "/",
    },
    {
      name: "Competencias",
      to: "/",
    },
    {
      name: "Laboratorios",
      to: "/",
    },
    {
      name: "Fotogalería",
      to: "/galeria",
    },
    {
      name: "Concursos Nacionales",
      to: "/",
    },
    {
      name: "Visitas Industriales",
      to: "/",
    },
    {
      name: "Integradores",
      to: "/",
    },
    {
      name: "Reticula",
      to: "/",
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
        <div className="border-b-black md:border-b p-1 flex justify-between items-center">
          <Link to="/">
            <img src="assets/logo LGNP.webp" alt="" className="w-10 h-auto" />
          </Link>
          <Button
            onClick={toggleSidebar}
            variant={"outline"}
            className="md:hidden"
          >
            <Menu></Menu>
          </Button>
        </div>
        <div className="gap-3 overflow-x-auto overflow-y-hidden scrollbar-thin p-2 whitespace-nowrap hidden md:flex justify-center">
          {link.map((link, i) => {
            return (
              <Link key={i} to={link.to} className="hover:underline">
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
        } bg-white/80 backdrop-blur-md border shadow-md w-full max-w-7xl`}
      >
        {/* Encabezado con logo y botón hamburguesa */}
        <div className="flex justify-between items-center p-2 border-b border-black/10">
          <Link to="/">
            <img src="assets/logo LGNP.webp" alt="" className="w-10 h-auto" />
          </Link>
          <Button
            onClick={toggleSidebar}
            variant="outline"
            className="md:hidden"
          >
            <Menu />
          </Button>
        </div>

        {/* Navegación scrollable en desktop */}
        <div className="gap-3 overflow-x-auto overflow-y-hidden scrollbar-thin p-2 whitespace-nowrap hidden md:flex justify-center">
          {link.map((link, i) => (
            <Link key={i} to={link.to} className="hover:underline">
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Navbar;

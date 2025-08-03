import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { isAuthenticated } from "@/lib/utils";
import { FilePlusIcon, ImagePlus, SquarePen } from "lucide-react";

function Admin() {
  const navigate = useNavigate();
  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await isAuthenticated();
      if (!loggedIn) {
        navigate("/");
      }
    };
    checkAuth();
  }, []);
  return (
    <>
      <h2>Panel de Administración</h2>
      <hr />
      <div className="flex flex-col sm:flex-row text-center gap-5 p-5">
        <div className="grid grid-cols-1 gap-5 border p-5 w-full sm:w-1/2">
          <h3>Noticias</h3>
          <Link to="/nueva" className="no-underline-anim mx-auto">
            <Button className="">
              <FilePlusIcon></FilePlusIcon>
              Nueva Noticia
            </Button>
          </Link>
          <Link to="/admin" className="no-underline-anim mx-auto">
            <Button>
              <SquarePen></SquarePen>
              Editar Noticias
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-5 border p-5 w-full sm:w-1/2">
          <h3>Imagenes</h3>
          <Link to="/admin" className="no-underline-anim mx-auto">
            <Button>
              <ImagePlus></ImagePlus>
              Subir Imagen
            </Button>
          </Link>
          <Link to="/admin" className="no-underline-anim mx-auto">
            <Button>
              <SquarePen></SquarePen>
              Gestionar Imagenes
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Admin;

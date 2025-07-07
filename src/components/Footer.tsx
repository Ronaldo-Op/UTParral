import { FaTiktok, FaFacebook, FaInstagram } from "react-icons/fa";
import { MapPinned } from "lucide-react";
import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <div className="flex flex-col justify-center xs:text-left text-center bg-neutral-900 p-10">
      <div className="flex flex-col xs:flex-row gap-10">
        <div className="flex flex-col xs:w-1/2">
          <div className="w-1/2 aspect-[1/1] rounded-md overflow-hidden m-auto xs:m-0">
            <img src="assets/UTP.png" alt="" />
          </div>
          <p className="font-semibold text-white">
            Licenciatura en Administración
          </p>
          <span>
            Av. Gral. Jesús Lozoya Solís Km 0.931, Col. Paseos del Almanceña
            33827
          </span>
          <a
            href="tel:+526275232107"
            className="hover:underline no-underline-anim mb-3"
          >
            Tel. +52 (627) 523 2107
          </a>
          <span>Hidalgo del Parral, Chih. México</span>
        </div>
        <div className="flex flex-col xs:w-1/2 justify-start">
          <h3 className="text-white">LIGAS DE INTERÉS</h3>
          <hr />
          <div className="flex p-2">
            <a href="https://www.utparral.edu.mx/">UTParral</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col xs:flex-row pt-10 justify-between gap-3">
        <div className="flex flex-row gap-3 justify-center xs:justify-start">
          <a
            href="https://www.facebook.com/profile.php?id=61556091982393"
            target="_blank"
            className="text-white no-underline-anim"
          >
            <Button
              variant={"outline"}
              className="rounded-full w-8 h-8 bg-neutral-900"
            >
              <FaFacebook className="text-2xl"></FaFacebook>
            </Button>
          </a>
          <a
            href="https://www.instagram.com/emprendimiento_utp?igsh=MTh0ZW11cjRrd2x1Zg=="
            target="_blank"
            className="text-white no-underline-anim"
          >
            <Button
              variant={"outline"}
              className="rounded-full w-8 h-8 bg-neutral-900"
            >
              <FaInstagram className="text-2xl"></FaInstagram>
            </Button>
          </a>
          <a
            href="https://www.tiktok.com/@licenciatura_en_admin?_t=ZS-8wWG0KbTvPu&_r=1"
            target="_blank"
            className="text-white no-underline-anim"
          >
            <Button
              variant={"outline"}
              className="rounded-full w-8 h-8 bg-neutral-900"
            >
              <FaTiktok className="text-2xl" />
            </Button>
          </a>
          <a
            href="https://www.google.com/maps/place/Technological+University+of+Parral/@26.946036,-105.72195,15z/data=!4m6!3m5!1s0x86945470990c8f8b:0x62dd61c0e1d03cd0!8m2!3d26.9460355!4d-105.7219505!16s%2Fg%2F11b5wmkrft?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            className="text-white no-underline-anim"
          >
            <Button
              variant={"outline"}
              className="rounded-full w-8 h-8 bg-neutral-900"
            >
              <MapPinned className="text-2xl" />
            </Button>
          </a>
        </div>
        <div className="flex items-baseline-last justify-center">
          <span>2025 © Todos los derechos reservados</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;

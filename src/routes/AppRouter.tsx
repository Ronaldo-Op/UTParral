import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Labs from "../pages/Labs";
import NotFound from "../pages/NotFound";
import Galery from "../pages/Galery";
import Reticula from "../pages/Reticula";
import Integradora from "../pages/Integradora";
import News from "../pages/News";
import Travels from "../pages/Travels";
import Concursos from "../pages/Concursos";
import Capabilities from "../pages/Capabilities";
import Upload from "../pages/Upload";
import NewsItem from "../pages/NewsItem";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";

function AppRouter() {
  return (
    <SidebarProvider defaultOpen={false}>
      <ScrollToTop />
      <div className="w-full h-full flex flex-col cursor-default select-none max-w-7xl mx-auto min-w-80">
        <Navbar />
        <div className=" border-foreground flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Galery />} />
            <Route path="/laboratorios" element={<Labs />} />
            <Route path="/reticula" element={<Reticula />} />
            <Route path="/noticias" element={<News />} />
            <Route path="/nueva" element={<Upload />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/noticias/:id" element={<NewsItem />} />
            <Route path="/integradoras" element={<Integradora />} />
            <Route path="/concursos" element={<Concursos />} />
            <Route path="/visitas" element={<Travels />} />
            <Route path="/competencias" element={<Capabilities />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
      <AppSidebar></AppSidebar>
    </SidebarProvider>
  );
}

export default AppRouter;

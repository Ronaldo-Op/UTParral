import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Labs from "../pages/Labs";
import NotFound from "../pages/NotFound";
import Galery from "../pages/Galery";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/Sidebar";
import ScrollToTop from "../components/ScrollToTop";

function AppRouter() {
  return (
    <SidebarProvider defaultOpen={false}>
      <ScrollToTop />
      <div className="w-full h-full flex flex-col cursor-default select-none max-w-7xl mx-auto min-w-80">
        <Navbar />
        <div className=" border-foreground p-2 pt-4 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/galeria" element={<Galery />} />
            <Route path="/laboratorios" element={<Labs />} />
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

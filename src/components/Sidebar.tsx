import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "./ui/button";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();
  const items = [
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
      name: "Integradores",
      to: "/integradoras",
    },
    {
      name: "Reticula",
      to: "/reticula",
    },
  ];
  return (
    <Sidebar side="right" variant="sidebar">
      <SidebarHeader className="flex items-end">
        <Button
          onClick={toggleSidebar}
          variant={"outline"}
          className="h-7 w-7 rounded-full"
        >
          <X></X>
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item, i) => (
                <SidebarMenuItem key={i}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.to}
                      onClick={toggleSidebar}
                      className="no-underline-anim"
                    >
                      <span>{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

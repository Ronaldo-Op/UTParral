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
                    <Link to={item.to} onClick={toggleSidebar}>
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

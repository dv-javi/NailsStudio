import type { RouteObject } from "react-router-dom";

import Home from "@/pages/Home/Home";
import Disenos from "@/pages/Disenos/Disenos";
import Servicios from "@/pages/Servicios/Servicios";
import SobreMi from "@/pages/SobreMi/SobreMi";
import Resenas from "@/pages/Resenas/Resenas";
import NotFound from "@/pages/NotFound/NotFound";

export const appRoutes: RouteObject[] = [
  { path: "/", element: <Home /> },
  { path: "/Disenos", element: <Disenos /> },
  { path: "/servicios", element: <Servicios /> },
  { path: "/sobre-mi", element: <SobreMi /> },
  { path: "/resenas", element: <Resenas /> },
  { path: "*", element: <NotFound /> },
];

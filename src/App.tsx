import { BrowserRouter, useRoutes } from "react-router-dom";

import { useLenisScroll } from "@/hooks/useLenisScroll";
import PublicLayout from "@/layouts/PublicLayout";
import { appRoutes } from "@/router/routes";

import "./App.css";

function AppRoutes() {
  return useRoutes([
    {
      element: <PublicLayout />,
      children: appRoutes,
    },
  ]);
}

export default function App() {
  useLenisScroll();

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

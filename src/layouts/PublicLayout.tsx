import { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import { useScrollToTop } from "@/hooks/useScrollToTop";

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function PublicLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <>
      <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
      <ScrollToTop />

      <main className={`main-content ${collapsed ? "collapsed" : ""}`}>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

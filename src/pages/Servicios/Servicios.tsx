import { useState } from "react";

import ServiceGrid from "@/components/sections/ServiceGrid/ServiceGrid";
import ServiceModal from "@/components/sections/ServiceModal/ServiceModal";
import { servicios } from "@/data/services";

import "@/components/sections/ServiceGrid/servicios.css";

export default function Servicios() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const active = servicios.find((s) => s.id === activeModal) ?? null;

  return (
    <main className="servicios-page">
      <section className="servicios-header">
        <h1 className="servicios-title">Servicios</h1>

        <p className="servicios-subtitle">
          Descubre nuestros servicios y elige el ideal para ti.
        </p>
      </section>

      <ServiceGrid onSelect={setActiveModal} />

      <ServiceModal
        service={active}
        onClose={() => setActiveModal(null)}
      />
    </main>
  );
}

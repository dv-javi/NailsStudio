import { Link } from "react-router-dom";

import SEO from "@/components/SEO";

import "./NotFound.css";

export default function NotFound() {
  return (
    <>
      <SEO
        title="Página no encontrada"
        description="La página que buscas no existe o ha sido movida."
        url="https://your-domain.com/404"
      />

      <section className="not-found" aria-labelledby="not-found-heading">
        <p className="not-found__code" aria-hidden="true">
          404
        </p>

        <h1 id="not-found-heading" className="not-found__title">
          Página no encontrada
        </h1>

        <p className="not-found__description">
          Lo sentimos, no hemos podido encontrar la página que buscas. Puede que
          el enlace esté roto o que la página haya sido eliminada.
        </p>

        <Link
          to="/"
          className="not-found__button"
          aria-label="Volver al inicio de Nailstudio Grace"
        >
          Volver al inicio
        </Link>
      </section>
    </>
  );
}

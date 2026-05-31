import { servicios } from "@/data/services";

type ServiceGridProps = {
  onSelect: (id: string) => void;
};

export default function ServiceGrid({ onSelect }: ServiceGridProps) {
  return (
    <section className="servicios-grid">
      {servicios.map((s) => (
        <article key={s.id} className="servicio-card">
          <div className="servicio-img-wrapper">
            <img className="servicio-img" src={s.img} alt={s.title} />
          </div>

          <div className="servicio-icon-circle">
            <i className={`ti ${s.icon}`} aria-hidden="true" />
          </div>

          <div className="servicio-body">
            <h2 className="servicio-name">{s.title}</h2>

            <p className="servicio-desc">{s.description}</p>

            <button
              type="button"
              className="ver-mas-btn"
              onClick={() => onSelect(s.id)}
            >
              Ver detalles
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </button>
          </div>
        </article>
      ))}
    </section>
  );
}

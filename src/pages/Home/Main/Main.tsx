import "@tabler/icons-webfont/dist/tabler-icons.css";
import { NavLink } from "react-router-dom";

import { bookLink } from "@/data/contact";
import { nails } from "@/data/designs";
import { resenas } from "@/data/resenas";
import { servicios } from "@/data/services";

import "./main.css";

const stats = [
  { value: "4.9", label: "Valoración media" },
  { value: "500+", label: "Clientas felices" },
  { value: "5+", label: "Años de experiencia" },
];

const highlights = [
  {
    icon: "ti-sparkles",
    title: "Diseño personalizado",
    text: "Cada cita se planifica contigo para un resultado único y a tu medida.",
  },
  {
    icon: "ti-shield-check",
    title: "Productos de calidad",
    text: "Materiales profesionales y protocolos de higiene en cada servicio.",
  },
  {
    icon: "ti-heart-handshake",
    title: "Trato cercano",
    text: "Un espacio acogedor donde te sientes escuchada desde el primer minuto.",
  },
];

const steps = [
  {
    icon: "ti-calendar-event",
    title: "Reserva tu cita",
    text: "Escríbeme por WhatsApp y elige el horario que mejor te venga.",
  },
  {
    icon: "ti-palette",
    title: "Elige tu look",
    text: "Explora diseños o trae tu inspiración; te asesoro en todo momento.",
  },
  {
    icon: "ti-sparkles",
    title: "Sal con brillo",
    text: "Disfruta de uñas impecables y un momento solo para ti.",
  },
];

const featuredServices = servicios.slice(0, 3);
const featuredDesigns = nails.slice(0, 4);
const featuredReview = resenas[0];

export default function Main() {
  return (
    <main className="home-main">
      <section className="home-stats" aria-label="Datos del estudio">
        {stats.map(({ value, label }) => (
          <article key={label} className="home-stat">
            <span className="home-stat-value">{value}</span>
            <span className="home-stat-label">{label}</span>
          </article>
        ))}
      </section>

      <section className="home-section" aria-labelledby="home-services-title">
        <header className="home-section-header">
          <span className="home-eyebrow">Servicios</span>
          <h2 id="home-services-title" className="home-section-title">
            Lo más solicitado
          </h2>
          <p className="home-section-subtitle">
            Desde un acabado clásico hasta nail art elaborado, encuentra el
            servicio perfecto para ti.
          </p>
        </header>

        <div className="home-services-grid">
          {featuredServices.map((service) => (
            <article key={service.id} className="home-service-card">
              <div className="home-service-img-wrapper">
                <img src={service.img} alt={service.title} />
              </div>

              <div className="home-service-body">
                <div className="home-service-icon">
                  <i className={`ti ${service.icon}`} aria-hidden="true" />
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <span className="home-service-price">
                  {service.modalInfo.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        <NavLink to="/servicios" className="home-link-btn">
          Ver todos los servicios
          <i className="ti ti-arrow-right" aria-hidden="true" />
        </NavLink>
      </section>

      <section className="home-section" aria-labelledby="home-designs-title">
        <header className="home-section-header">
          <span className="home-eyebrow">Inspiración</span>
          <h2 id="home-designs-title" className="home-section-title">
            Diseños que enamoran
          </h2>
          <p className="home-section-subtitle">
            Un adelanto de los looks que puedes lucir en tu próxima cita.
          </p>
        </header>

        <div className="home-designs-grid">
          {featuredDesigns.map((design) => (
            <article key={design.id} className="home-design-card">
              <img src={design.image} alt={design.title} />
              <div className="home-design-info">
                <h3>{design.title}</h3>
                <span>{design.category}</span>
              </div>
            </article>
          ))}
        </div>

        <NavLink to="/disenos" className="home-link-btn">
          Explorar galería
          <i className="ti ti-arrow-right" aria-hidden="true" />
        </NavLink>
      </section>

      <section className="home-section" aria-labelledby="home-process-title">
        <header className="home-section-header home-section-header--center">
          <span className="home-eyebrow">Tu experiencia</span>
          <h2 id="home-process-title" className="home-section-title">
            Así de fácil es reservar
          </h2>
        </header>

        <div className="home-steps">
          {steps.map(({ icon, title, text }, index) => (
            <article key={title} className="home-step">
              <span className="home-step-number">{index + 1}</span>
              <div className="home-step-icon">
                <i className={`ti ${icon}`} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-highlights" aria-labelledby="home-values-title">
        <header className="home-section-header">
          <span className="home-eyebrow">Por qué Grace</span>
          <h2 id="home-values-title" className="home-section-title">
            Más que uñas bonitas
          </h2>
        </header>

        <div className="home-highlights-grid">
          {highlights.map(({ icon, title, text }) => (
            <article key={title} className="home-highlight-card">
              <div className="home-highlight-icon">
                <i className={`ti ${icon}`} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      {featuredReview && (
        <section className="home-review" aria-label="Reseña destacada">
          <div className="home-review-stars" aria-hidden="true">
            {"★".repeat(featuredReview.rating)}
          </div>

          <blockquote className="home-review-text">
            “{featuredReview.text}”
          </blockquote>

          <div className="home-review-author">
            <img src={featuredReview.avatar} alt={featuredReview.name} />
            <div>
              <strong>{featuredReview.name}</strong>
              <span>{featuredReview.date}</span>
            </div>
          </div>

          <NavLink to="/resenas" className="home-link-btn home-link-btn--inline">
            Ver más reseñas
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </NavLink>
        </section>
      )}

      <section className="home-cta">
        <div className="home-cta-content">
          <h2>¿Lista para brillar?</h2>
          <p>
            Reserva hoy y descubre por qué tantas clientas confían en Nailstudio
            Grace.
          </p>
        </div>

        <div className="home-cta-actions">
          <a href={bookLink} target="_blank" rel="noopener noreferrer">
            <button type="button" className="home-cta-btn primary">
              Reservar cita
              <i className="ti ti-calendar-event" aria-hidden="true" />
            </button>
          </a>

          <NavLink to="/sobre-mi">
            <button type="button" className="home-cta-btn secondary">
              Conóceme
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </button>
          </NavLink>
        </div>
      </section>
    </main>
  );
}

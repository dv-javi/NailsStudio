import "@tabler/icons-webfont/dist/tabler-icons.css";
import { NavLink } from "react-router-dom";

import { bookLink } from "@/data/contact";
import { profileImages, resolveGlobAsset } from "@/utils/assets";

import "./sobremi.css";

const highlights = [
  {
    icon: "ti-sparkles",
    title: "Detalle en cada uña",
    text: "Cada diseño se planifica contigo para que refleje tu estilo y personalidad.",
  },
  {
    icon: "ti-shield-check",
    title: "Higiene y cuidado",
    text: "Protocolos de limpieza rigurosos y productos de calidad para cuidar tu uña natural.",
  },
  {
    icon: "ti-heart-handshake",
    title: "Experiencia cercana",
    text: "Un espacio acogedor donde te sientes escuchada desde la primera cita.",
  },
];

const milestones = [
  { value: "5+", label: "Años de experiencia" },
  { value: "500+", label: "Clientas felices" },
  { value: "100%", label: "Pasión por las uñas" },
];

export default function SobreMi() {
  const profileImage =
    resolveGlobAsset(profileImages, "Profiles/profile-rec.avif") ?? "";

  return (
    <main className="sobre-mi-page">
      <title>Sobre mí — Nailstudio Grace</title>

      <header className="sobre-mi-header">
        <span className="sobre-mi-eyebrow">Conóceme</span>
        <h1 className="sobre-mi-title">Sobre mí</h1>
        <p className="sobre-mi-subtitle">
          Manicurista apasionada por transformar tus uñas en pequeñas obras de
          arte.
        </p>
      </header>

      <section
        className="sobre-mi-intro"
        aria-labelledby="sobre-mi-story-title"
      >
        <div className="sobre-mi-photo-card">
          <img
            className="sobre-mi-photo"
            src={profileImage}
            alt="Grace, fundadora de Nailstudio Grace"
          />
          <div className="sobre-mi-photo-badge">
            <i className="ti ti-star-filled" aria-hidden="true" />
            <span>Nail Artist</span>
          </div>
        </div>

        <div className="sobre-mi-story">
          <h2 id="sobre-mi-story-title" className="sobre-mi-story-title">
            Hola, soy <span>Grace</span>
          </h2>

          <p>
            Bienvenida a Nailstudio Grace, mi rincón creado para que disfrutes
            un momento solo para ti. Empecé este proyecto con una idea clara:
            ofrecer uñas impecables, diseños con personalidad y un trato cálido
            que te haga volver una y otra vez.
          </p>

          <p>
            Me especializo en gel, rubber base, acrílicas y nail art
            personalizado. Escucho lo que buscas, te asesoro con honestidad y
            cuido cada detalle para que salgas con las uñas que imaginaste — o
            mejor.
          </p>

          <blockquote className="sobre-mi-quote">
            <i className="ti ti-quote" aria-hidden="true" />
            Creo que unas uñas bonitas no solo cambian tu look: te dan
            confianza.
          </blockquote>
        </div>
      </section>

      <section
        className="sobre-mi-defines"
        aria-labelledby="sobre-mi-values-title"
      >
        <div className="sobre-mi-stats" aria-label="Logros">
          {milestones.map(({ value, label }) => (
            <article key={label} className="sobre-mi-stat">
              <span className="sobre-mi-stat-value">{value}</span>
              <span className="sobre-mi-stat-label">{label}</span>
            </article>
          ))}
        </div>

        <div className="sobre-mi-values-block">
          <header className="sobre-mi-values-header">
            <h2 id="sobre-mi-values-title" className="sobre-mi-section-title">
              Lo que me define
            </h2>
            <p className="sobre-mi-section-subtitle">
              Tres pilares que guían cada cita en el estudio.
            </p>
          </header>

          <div className="sobre-mi-values-grid">
            {highlights.map(({ icon, title, text }) => (
              <article key={title} className="sobre-mi-value-card">
                <div className="sobre-mi-value-icon">
                  <i className={`ti ${icon}`} aria-hidden="true" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sobre-mi-cta">
        <div className="sobre-mi-cta-content">
          <h2>¿Lista para tu próxima cita?</h2>
          <p>Reserva hoy y descubre por qué tantas clientas confían en mí.</p>
        </div>

        <div className="sobre-mi-cta-actions">
          <a href={bookLink} target="_blank" rel="noopener noreferrer">
            <button type="button" className="sobre-mi-btn primary">
              Reservar cita
              <i className="ti ti-calendar-event" aria-hidden="true" />
            </button>
          </a>

          <NavLink to="/servicios">
            <button type="button" className="sobre-mi-btn secondary">
              Ver servicios
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </button>
          </NavLink>
        </div>
      </section>
    </main>
  );
}

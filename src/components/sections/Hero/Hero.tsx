import "@tabler/icons-webfont/dist/tabler-icons.css";
import ScrollTrigger from "gsap/ScrollTrigger";
import { NavLink } from "react-router-dom";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import CustomerAvatars from "@/components/sections/CustomerAvatars/CustomerAvatars";
import { bookLink } from "@/data/contact";
import { brandImages, resolveGlobAsset } from "@/utils/assets";

import "./hero.css";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    const split = SplitText.create(".split", {
      type: "words, chars",
      charsClass: "char",
    });

    gsap.from(split.chars, {
      duration: 1,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
      ease: "power3.out",
    });
  }, []);

  return (
    <header className="home-header-layout">
      <section className="home-info-header">
        <CustomerAvatars />

        <div className="main-title">
          <h1 className="text-header split">
            Tus uñas,
            <br />
            tu estilo
            <br />
            <span>Haz que brillen</span>
          </h1>
        </div>

        <div className="info-buttons">
          <NavLink to="/disenos">
            <button
              data-aos="fade-up"
              data-aos-duration="800"
              className="desing-btn-home"
            >
              <span>Ver Diseños</span>
              <i className="ti ti-arrow-right" aria-hidden="true" />
            </button>
          </NavLink>

          <a href={bookLink} target="_blank" rel="noopener noreferrer">
            <button
              data-aos="fade-up"
              data-aos-duration="1400"
              className="book-btn-home"
            >
              <span>Reservar cita</span>
              <i className="ti ti-calendar-event" aria-hidden="true" />
            </button>
          </a>
        </div>
      </section>

      <div className="image-container">
        <img
          className="hero-image"
          src={resolveGlobAsset(brandImages, "hero-image.avif")}
          alt="Profile"
        />
      </div>
    </header>
  );
}

import { useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "@tabler/icons-webfont/dist/tabler-icons.css";
import "swiper/css";
import "swiper/css/navigation";

import { nails, categories } from "@/data/designs";
import type { NailDesign } from "@/types/design";

import "./disenos.css";

export default function DesignGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  const filteredNails = useMemo(() => {
    if (activeCategory === "todos") return nails;
    return nails.filter((nail: NailDesign) => nail.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="designs-page">
      <div className="designs-top">
        <div>
          <h1 className="designs-title">Diseños</h1>

          <p className="designs-subtitle">
            Explora nuestros diseños y encuentra tu próximo look favorito.
          </p>
        </div>

        <div className="designs-navigation">
          <button
            type="button"
            className="designs-swiper-prev"
            aria-label="Anterior"
          >
            <i className="ti ti-arrow-left" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="designs-swiper-next"
            aria-label="Siguiente"
          >
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="categories">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={
              activeCategory === category
                ? "category-btn active"
                : "category-btn"
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <Swiper
        key={activeCategory}
        modules={[Navigation]}
        watchOverflow
        navigation={{
          prevEl: ".designs-swiper-prev",
          nextEl: ".designs-swiper-next",
        }}
        spaceBetween={25}
        slidesPerView={1.2}
        breakpoints={{
          480: { slidesPerView: 2 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
          1600: { slidesPerView: 6 },
        }}
      >
        {filteredNails.map((nail) => (
          <SwiperSlide key={nail.id}>
            <article className="nail-card">
              <img className="nail-image" src={nail.image} alt={nail.title} />

              <div className="nail-info">
                <div>
                  <h3>{nail.title}</h3>
                  <span>{nail.category}</span>
                </div>

                <button type="button" className="favorite-btn" aria-label="Favorito">
                  <i className="ti ti-heart" aria-hidden="true" />
                </button>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

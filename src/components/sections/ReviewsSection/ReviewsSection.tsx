import "@tabler/icons-webfont/dist/tabler-icons.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CustomerAvatars from "@/components/sections/CustomerAvatars/CustomerAvatars";
import { bookLink } from "@/data/contact";
import { ratings } from "@/data/ratings";
import { resenas } from "@/data/resenas";

import "./resenas.css";

export default function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-header">
        <div>
          <h2>Reseñas</h2>
          <p>Lo que dicen nuestras clientas felices.</p>
        </div>

        <div className="reviews-nav">
          <button
            type="button"
            className="reviews-swiper-prev"
            aria-label="Anterior"
          >
            <i className="ti ti-arrow-left" aria-hidden="true" />
          </button>

          <button
            type="button"
            className="reviews-swiper-next"
            aria-label="Siguiente"
          >
            <i className="ti ti-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="reviews-stats">
        <div className="rating-card">
          <span className="rating-icon">✦</span>
          <h3>4.9</h3>
          <div className="stars">★★★★★</div>
          <p>Basado en 120+ reseñas</p>
        </div>

        <div className="rating-bars">
          {ratings.map((item) => (
            <div key={item.star} className="bar-row">
              <span className="bar-star">{item.star} ★</span>

              <div className="bar">
                <div className="bar-fill" style={{ width: item.percent }} />
              </div>

              <span className="bar-percent">{item.percent}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="reviews-carousel">
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: ".reviews-swiper-prev",
            nextEl: ".reviews-swiper-next",
          }}
          spaceBetween={24}
          slidesPerView={1.15}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 4 },
          }}
          className="reviews-swiper"
        >
          {resenas.map((review) => (
            <SwiperSlide key={review.id}>
              <article className="review-card">
                <div className="review-user">
                  <img src={review.avatar} alt={review.name} />

                  <div className="review-info">
                    <h4>{review.name}</h4>
                    <div className="review-stars">
                      {"★".repeat(review.rating)}
                    </div>
                  </div>

                  <span className="review-date">{review.date}</span>
                </div>

                <p className="review-text">{review.text}</p>

                <img
                  src={review.image}
                  alt={review.name}
                  className="review-image"
                />
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="reviews-cta">
        <CustomerAvatars />

        <div className="cta-text">
          <h3>¿Lista para tu próximo look?</h3>
          <p>Reserva tu cita y déjanos realzar tu belleza.</p>
        </div>

        <a href={bookLink} target="_blank" rel="noopener noreferrer">
          <button type="button" className="cta-button">
            Reservar cita
            <i className="ti ti-calendar" aria-hidden="true" />
          </button>
        </a>
      </div>
    </section>
  );
}

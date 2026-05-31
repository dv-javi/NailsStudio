import Modal from "@/components/ui/Modal/Modal";
import { contactLinks } from "@/data/contact";
import { profileImages, resolveGlobAsset } from "@/utils/assets";

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      backdropClassName="contact-modal-backdrop"
      panelClassName="contact-modal"
      ariaLabelledBy="contact-modal-title"
    >
      <button
        type="button"
        className="contact-close-btn"
        onClick={onClose}
        aria-label="Cerrar contacto"
      >
        <i className="ti ti-x" aria-hidden="true" />
      </button>

      <div className="contact-modal-content">
        <div className="contact-left">
          <img
            src={resolveGlobAsset(profileImages, "Profiles/profile-pop.png")}
            alt="Grace"
            className="contact-profile"
          />
        </div>

        <div className="contact-right">
          <span className="contact-tag">CONTACTO</span>

          <h2 id="contact-modal-title" className="contact-title">
            Agenda tu cita ✨
          </h2>

          <p className="contact-description">
            Elige tu plataforma favorita para reservar tu próxima cita y hacer
            que tus uñas brillen.
          </p>

          <div className="contact-actions">
            <a
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action"
            >
              <i className="ti ti-brand-whatsapp" aria-hidden="true" />

              <div>
                <strong>WhatsApp</strong>
                <span>Reserva directa</span>
              </div>
            </a>

            <a
              href={contactLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action"
            >
              <i className="ti ti-brand-instagram" aria-hidden="true" />

              <div>
                <strong>Instagram</strong>
                <span>{contactLinks.instagramHandle}</span>
              </div>
            </a>

            <a href={contactLinks.phone} className="contact-action">
              <i className="ti ti-phone" aria-hidden="true" />

              <div>
                <strong>Teléfono</strong>
                <span>{contactLinks.phoneDisplay}</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </Modal>
  );
}

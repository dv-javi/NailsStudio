import Modal from "@/components/ui/Modal/Modal";
import type { Servicio } from "@/types/service";
import { getWhatsAppServiceUrl } from "@/services/booking";

type ServiceModalProps = {
  service: Servicio | null;
  onClose: () => void;
};

export default function ServiceModal({ service, onClose }: ServiceModalProps) {
  if (!service) return null;

  return (
    <Modal
      isOpen={Boolean(service)}
      onClose={onClose}
      backdropClassName="modal-backdrop"
      panelClassName="servicio-modal"
    >
      <button
        type="button"
        className="modal-close-btn"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <i className="ti ti-x" aria-hidden="true" />
      </button>

      <img className="modal-img" src={service.img} alt={service.title} />

      <div className="modal-content">
        <h2 className="modal-title">{service.title}</h2>

        <div className="modal-meta">
          <span className="modal-badge">
            <i className="ti ti-clock" aria-hidden="true" />
            {service.modalInfo.duration}
          </span>

          <span className="modal-badge">
            <i className="ti ti-tag" aria-hidden="true" />
            {service.modalInfo.price}
          </span>
        </div>

        <ul className="modal-includes">
          {service.modalInfo.includes.map((item) => (
            <li key={item}>
              <i className="ti ti-check" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <p className="modal-tip">{service.modalInfo.tip}</p>

        <a
          href={getWhatsAppServiceUrl(service.title)}
          target="_blank"
          rel="noopener noreferrer"
          className="modal-book-btn"
        >
          Reservar cita
          <i className="ti ti-calendar-event" aria-hidden="true" />
        </a>
      </div>
    </Modal>
  );
}

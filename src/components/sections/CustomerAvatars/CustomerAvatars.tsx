import { getCustomerAvatars } from "@/utils/assets";

const customers = getCustomerAvatars();

export default function CustomerAvatars() {
  return (
    <div className="customers-feedback">
      <div className="customer-avatars">
        {customers.map(({ id, img, alt }, index) => (
          <img
            key={id}
            className="customer-avatar"
            src={img}
            alt={alt}
            style={{ zIndex: customers.length - index }}
          />
        ))}
      </div>

      <div className="customers-badge">
        <i className="ti ti-heart" aria-hidden="true" />

        <p>
          <strong>500+</strong> Clientes felices
        </p>
      </div>
    </div>
  );
}

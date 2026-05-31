export interface Servicio {
  id: string;
  title: string;
  description: string;
  icon: string;
  img: string;
  link: string;
  modalInfo: {
    duration: string;
    price: string;
    includes: string[];
    tip: string;
  };
}

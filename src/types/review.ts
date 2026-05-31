export interface Resena {
  id: string;
  name: string;
  avatar: string;
  image: string;
  date: string;
  rating: number;
  text: string;
}

export interface RatingBar {
  star: number;
  percent: string;
}

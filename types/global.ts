export type Email = {
  id: number;
  primary: number;
  email: string;
  email_verified_at?: string;
};

export type User = {
  name: string;
  google_id: string;
  image: string;
  emails: Email[];
  id: number;
};

export type Genre = { id: string; genre: string };

export type Quote = {
  id: number;
  movie_id: number;
  quote: { [key: string]: string; en: string; ka: string };
  image: string;
};

export type Movie = {
  id: number;
  name: { [key: string]: string; en: string; ka: string };
  budget: number;
  year: number;
  description: { [key: string]: string; en: string; ka: string };
  director: { [key: string]: string; en: string; ka: string };
  image: string;
  genres: string;
  quotes: Quote[];
};

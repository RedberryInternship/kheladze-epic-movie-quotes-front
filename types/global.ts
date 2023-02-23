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
  notifications: Notification[];
};

export type Genre = { id: string; genre: string };

export type Comment = {
  id: string;
  quote_id: string;
  comment: string;
  writer_id: string;
  user: User;
};

export type Notification = {
  id: string;
  quote_id: string;
  user_id: string;
  type: string;
  is_new: number;
  writer_id: string;
  created_at: Date;
  writer: User;
};

export type Like = {
  quote_id: string;
  user_id: string;
};

export type Quote = {
  id: number;
  movie_id: number;
  quote: { [key: string]: string; en: string; ka: string };
  image: string;
  movies: Movie;
  comments: Comment[];
  likes: Like[];
};

export type Movie = {
  id: number;
  user_id: number;
  name: { [key: string]: string; en: string; ka: string };
  budget: number;
  year: number;
  description: { [key: string]: string; en: string; ka: string };
  director: { [key: string]: string; en: string; ka: string };
  image: string;
  genres: string;
  quotes: Quote[];
  users?: User;
};

import { string } from "yup";

export type Register = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

export type Login = {
  email: string;
  password: string;
};

export type EditEmail = {
  email: string;
};

export type Image = {
  image: string;
};

export type EditPasswordForm = {
  password: string;
  password_confirmation: string;
};

export type MovieForm = {
  name_en: string;
  name_ka: string;
  genres: string;
  director_en: string;
  director_ka: string;
  description_en: string;
  description_ka: string;
  budget: number;
  year: number;
  image: string;
};

export type QuoteForm = {
  quote_en: string;
  quote_ka: string;
  image: string;
};

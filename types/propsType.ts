import { DefaultTFuncReturn } from "i18next";
import { ReactNode } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { User } from "./global";

export type RegisterProps = {
  loginClick: () => void;
  succesSubmit: (linkTo: string) => void;
};

export type LoginFormProps = { singupClick: () => void };

export type LandingHeaderProps = {
  login: () => void;
  singup: () => void;
  labels: { movie_quotes: string; singup: string; login: string };
};

export type InputProps = {
  name: string;
  type: string;
  label: string;
  placeholder?: DefaultTFuncReturn;
  register: UseFormRegisterReturn;
  error?: FieldError;
  isDirty?: boolean;
  backErr?: string;
  className?: string;
};

export type LandingQuoteProps = {
  background: string;
  quote: string;
  movie: string;
};

export type RedBtnProps = {
  className?: string;
  label: string;
  click?: () => void;
  link?: string | null;
};

export type BlackBtnProps = {
  click?: () => void;
  label: string;
  className?: string;
};

export type ModalWrapperProps = {
  closeModal?: () => void;
  children: ReactNode;
  className?: string;
};

export type ModalProps = {
  closeModal?: () => void;
  children: ReactNode;
  className?: string;
};

export type EditNameMailProps = {
  label: string;
  back: string;
  user?: User;
};

export type EditPasswordProps = { user: User };

export type EmailsProps = { user: User };

export type DotProps = { fill?: string };

export type ErrorInpuProps = { className?: string };

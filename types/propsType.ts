import { DefaultTFuncReturn } from "i18next";
import {
  BaseSyntheticEvent,
  Dispatch,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
} from "react";
import {
  FieldError,
  UseFormRegisterReturn,
  UseFormSetValue,
} from "react-hook-form";
import { MovieForm } from "./forms";
import { Quote, User } from "./global";

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
  label?: DefaultTFuncReturn;
  placeholder?: DefaultTFuncReturn;
  register: UseFormRegisterReturn;
  error?: FieldError;
  isDirty?: boolean;
  backErr?: string;
  className?: string;
  languageLabel?: string;
};

export type LandingQuoteProps = {
  background: string;
  quote: string;
  movie: string;
};

export type RedBtnProps = {
  className?: string;
  label: string;
  click?:
    | ((e: Event) => Promise<void>)
    | ((e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>)
    | (() => void)
    | any;
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

export type ReadOnlyProps = {
  placeholder: string;
  label: string;
  className: string;
};

export type EmailModalProps = {
  user: User;
};

export type GenresDropdownProps = {
  setValue: UseFormSetValue<MovieForm>;
  close: () => void;
};

export type QuoteOptionsProps = {
  quote: Quote;
};

export type LangArrowProps = { isOpen: boolean; absolute?: boolean };

export type QuoteCardProps = { quote: Quote; loggedInUser: User };

export type NotificationsProps = {
  closeModal: Dispatch<SetStateAction<boolean>>;
};

export type SureProps = { confirm: any };

export type BackdropProps = { click?: () => void };

export type LangDropdownProps = { className: string };

export type LayoutProps = { children: React.ReactNode };

export type QuoteListProps = { quotes: Quote[] };

export type YouSureProps = { close: () => void; confirm: () => void };

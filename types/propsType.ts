export type RegisterProps = {
  loginClick: () => void;
  succesSubmit: (linkTo: string) => void;
};

export type LandingHeaderProps = {
  login: () => void;
  singup: () => void;
  labels: { movie_quotes: string; singup: string; login: string };
};

export type LandingQuoteProps = {
  background: string;
  quote: string;
  movie: string;
};

export type RedBtnProps = {
  className?: string;
  label: string;
  click?: any;
  link?: string | null;
};

export type ModalWrapperProps = {
  closeModal?: () => void;
  children: any;
  className?: string;
};

export type ModalProps = {
  closeModal?: () => void;
  children: any;
  className?: string;
};

export type EditNameMailProps = {
  profile: any;
  label: string;
  back: string;
  user?: any;
};

export type EditPasswordProps = { profile: any; user: any };

export type EmailsProps = { profile: any; user: any };

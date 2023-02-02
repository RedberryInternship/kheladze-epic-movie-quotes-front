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

export type EditPasswordForm = {
  password: string;
  password_confirmation: string;
};

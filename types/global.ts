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

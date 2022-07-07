/* eslint-disable @typescript-eslint/naming-convention */
export interface User {
  name: string;
  email: string;
  birthdate: string;
  dpi?: string;
  password?: string;
  remember_token?: string;
}
export interface Org {
  name: string;
  location?: string;
  email: string;
  description?: string;
  verification?: string;
  password?: string;
  remember_token?: string;
}

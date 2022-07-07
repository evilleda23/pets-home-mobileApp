/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import axios from 'axios';
const urlAPI = 'http://localhost:5000';
//const urlAPI = 'https://pets-home-url.herokuapp.com';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  public userIsLogged = false;
  private token: string;
  constructor() {}
  async lol() {
    const res = axios.get(urlAPI);
    return res;
  }
  async register(credentials: any) {
    //rembember: boolean) {
    console.log(credentials);

    const url = urlAPI + '/api/auth/';

    try {
      const config = {
        headers: {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(credentials);
      const res = await axios.post(url, body, config);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async login(email: string, password: string) {
    //rembember: boolean) {
    const url = urlAPI + '/api/auth';

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const body = { email, password };
      console.log(body, url, config);

      const res = await axios.post(url, body, config);
      console.log(res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
}

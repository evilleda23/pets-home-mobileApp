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
  async register(body: any, isUser: boolean) {
    //rembember: boolean) {
    console.log(body);
    const endpoint = isUser ? '/api/users' : '/api/orgs';
    const url = urlAPI + endpoint;

    try {
      const res = await this.postRequest(url, body);
      return res;
    } catch (error) {
      console.log(error.response.data);
    }
  }
  async loginUser(email: string, password: string) {
    const url = urlAPI + '/api/auth/users';
    const body = { email, password };
    try {
      const res = await this.postRequest(url, body);
      console.log(res);

      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async loginOrg(email: string, password: string) {
    const url = urlAPI + '/api/auth/orgs';
    const body = { email, password };
    try {
      const res = await this.postRequest(url, body);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async postRequest(url, body) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      return await axios.post(url, body, config);
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import axios from 'axios';
//const urlAPI = 'http://localhost:5000';
const urlAPI = 'https://api-pets-home.herokuapp.com';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  loggedIn = false;
  public userIsLogged = false;

  constructor(private storage: LocalStorageService) {}

  async register(body: any, isUser: boolean) {
    //rembember: boolean) {

    const endpoint = isUser ? '/api/users' : '/api/orgs';
    const url = urlAPI + endpoint;

    try {
      const res = await this.postRequest(url, body);

      await this.storage.saveToken(res.data.token);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async loginUser(email: string, password: string) {
    const url = urlAPI + '/api/auth/users';
    const body = { email, password };
    try {
      const res = await this.postRequest(url, body);
      if (res.data?.token) {
        await this.storage.saveToken(res.data.token);
      }
      return res;
    } catch (error) {
      console.error(error);
    }
  }

  async loginOrg(email: string, password: string) {
    const url = urlAPI + '/api/auth/orgs';
    const body = { email, password };
    try {
      const res = await this.postRequest(url, body);
      await this.storage.saveToken(res.data.token);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async getCurrentParticipant(isUser: boolean) {
    const endpoint = isUser ? '/api/auth/users' : '/api/auth/orgs';

    const url = urlAPI + endpoint;
    try {
      const res = await this.getRequest(url);

      return res;
    } catch (error) {
      console.error(error);
    }
  }

  async getRequest(url) {
    try {
      const token = await this.storage.getToken();

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
      return await axios.get(url, config);
    } catch (error) {
      console.error(error);
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
      console.error(error);
      return error;
    }
  }
}

/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import axios from 'axios';
import { LocalStorageService } from './local-storage.service';
const urlAPI = 'https://api-azure-petshome.herokuapp.com';
//const urlAPI = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class CuentasService {
  constructor(private storage: LocalStorageService) {}

  async registerUser(IDObjectUser: string) {
    const url = `${urlAPI}/api/users`;
    const body = {
      IDObjectUser,
    };

    try {
      const res = await this.postRequest(url, body);

      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async registerOrg(IDObjectOrg: string) {
    const url = `${urlAPI}/api/orgs`;
    const body = {
      IDObjectOrg,
    };
    try {
      const res = await this.postRequest(url, body);
      return res;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async getIDOrg(IDObject: string) {
    const url = `${urlAPI}/api/orgs/${IDObject}`;

    try {
      const res = await this.getRequest(url);
      console.log(res);

      return res.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  async registerCuenta(cuenta) {
    const url = `${urlAPI}/api/cuentas`;
    const rest = await axios.post(url, cuenta);

    return rest;
  }

  async registerCuentaOrg(iDCuenta, iDOrganizacion) {
    const url = `${urlAPI}/api/cuentas/cuenta-org`;
    const cuenta = {
      iDCuenta,
      iDOrganizacion,
    };
    const rest = await axios.post(url, cuenta);

    return rest;
  }
  async getCuentas(IDOrg) {
    const url = `${urlAPI}/api/orgs/cuentas/${IDOrg}`;

    try {
      const res = await this.getRequest(url);
      return res.data;
    } catch (error) {
      console.error(error);
      return error;
    }
  }
  async getRequest(url) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
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

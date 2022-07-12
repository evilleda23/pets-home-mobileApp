/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import axios from 'axios';
const urlAPI = 'http://localhost:3000';
@Injectable({
  providedIn: 'root',
})
export class CuentasService {
  constructor() {}

  async registerUser(IDObjectUser: string) {
    const url = `${urlAPI}/api/users`;
    const body = {
      IDObjectUser,
    };

    try {
      const res = await this.postRequest(url, body);
      console.log(res);

      return res;
    } catch (error) {
      console.log(error);
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
      console.log(error);
      return error;
    }
  }

  async getIDOrg(IDOrganizacion: string) {
    const url = `${urlAPI}/api/orgs`;
    const params = {
      IDOrganizacion,
    };
    try {
      const res = await this.getRequest(url, params);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async registerCuenta(cuenta) {
    const url = `${urlAPI}/api/cuentas`;
    const rest = await axios.post(url, cuenta);
    console.log(rest);

    return rest;
  }

  async registerCuentaOrg(iDCuenta, iDOrganizacion) {
    const url = `${urlAPI}/api/cuentas/cuenta-org`;
    const cuenta = {
      iDCuenta,
      iDOrganizacion,
    };
    const rest = await axios.post(url, cuenta);
    console.log(rest);
    return rest;
  }
  async getRequest(url, params = null) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
        params,
      };
      return await axios.get(url, config);
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

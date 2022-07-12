/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User, Org } from '../../interfaces/interfaces';
import {
  AlertController,
  MenuController,
  ToastController,
} from '@ionic/angular';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
import { CuentasService } from '../../services/cuentas.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isUser = true;
  user: any;
  org: any;
  participante = {
    email: '',
    password: '',
    name: '',
    birthdate: '',
    password2: '',
  };
  bubbles = false;
  legalAge = new Date().getFullYear() - 18;
  constructor(
    public alertController: AlertController,
    private auth: AuthService,
    private toastController: ToastController,
    private router: Router,
    private storage: LocalStorageService,
    private menuCtrl: MenuController,
    private cuentasService: CuentasService
  ) {
    this.menuCtrl.enable(false);
  }
  ngOnInit() {}
  async onSubmit(formulario: NgForm) {
    this.bubbles = true;

    if (this.participante.password === this.participante.password2) {
      let response;

      this.getParticipante();
      if (this.isUser) {
        response = await this.auth.register(this.user, this.isUser);
      } else {
        response = await this.auth.register(this.org, this.isUser);
      }

      if (response?.status === 200) {
        this.presentToast('Cuenta registrada correctamente', 'success', 750);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);

        if (this.isUser) {
          this.user = {
            ...this.user,
            isUser: this.isUser,
          };
          await this.storage.saveParticipant(this.user);
        } else {
          this.org = {
            ...this.org,
            isUser: this.isUser,
          };
          await this.storage.saveParticipant(this.org);
        }
        await this.registerUser();
      } else {
        this.presentToast(
          'Ya existe una cuenta con ese email registrado',
          'danger',
          1750
        );
      }
    }
  }

  async registerUser() {
    const res = await this.auth.getCurrentParticipant(this.isUser);
    console.log(res);

    if (this.user) {
      await this.cuentasService.registerUser(res.data._id);
    } else {
      await this.cuentasService.registerOrg(res.data._id);
    }
  }
  getParticipante() {
    if (this.isUser) {
      this.user = {
        name: this.participante.name,
        email: this.participante.email,
        birthdate: this.participante.birthdate,
        password: this.participante.password,
      };
    } else {
      this.org = {
        name: this.participante.name,
        email: this.participante.email,
        password: this.participante.password,
      };
    }
  }
  async presentToast(
    toastMessage: string,
    toastColor: string,
    duration: number = 1000
  ) {
    const toast = await this.toastController.create({
      cssClass: 'text-color',
      message: toastMessage,
      duration,
      color: toastColor,
    });
    toast.present();
  }
}

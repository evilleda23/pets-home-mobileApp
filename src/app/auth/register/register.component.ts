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

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isUser = true;
  user = {};
  org = {};
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
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }
  ngOnInit() {}
  async onSubmit(formulario: NgForm) {
    this.bubbles = true;

    if (
      this.participante.password === this.participante.password2 ||
      this.participante.password === this.participante.password2
    ) {
      let response;
      if (this.isUser) {
        this.user = {
          name: this.participante.name,
          email: this.participante.email,
          birthdate: this.participante.birthdate,
          password: this.participante.password,
        };
        response = await this.auth.register(this.user, this.isUser);
      } else {
        this.org = {
          name: this.participante.name,
          email: this.participante.email,
          password: this.participante.password,
        };
        response = await this.auth.register(this.org, this.isUser);
      }
      console.log(response);

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
          this.storage.saveParticipant(this.user);
        } else {
          this.org = {
            ...this.org,
            isUser: this.isUser,
          };
          console.log(this.org);

          this.storage.saveParticipant(this.org);
        }
      } else {
        this.presentToast(
          'Ya existe una cuenta con ese email registrado',
          'danger',
          1750
        );
      }
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

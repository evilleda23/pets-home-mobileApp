import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  AlertController,
  ToastController,
  MenuController,
} from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { CuentasService } from '../../services/cuentas.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: '';
  password: '';
  isUser = true;
  bubbles = false;
  constructor(
    public alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private auth: AuthService,
    private storage: LocalStorageService,
    private menuCtrl: MenuController
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {}

  async onSubmit(formulario: NgForm) {
    this.bubbles = true;
    let response;

    if (this.isUser) {
      response = await this.auth.loginUser(this.email, this.password);
    } else {
      response = await this.auth.loginOrg(this.email, this.password);
    }

    if (response.status === 200) {
      this.presentToast('Bienvenido', 'success', 750);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 500);

      const res = await this.auth.getCurrentParticipant(this.isUser);
      const participant = {
        ...res.data,
        isUser: this.isUser,
      };
      await this.storage.saveParticipant(participant);
    } else {
      this.presentToast('Usuario o contraseña incorrectos', 'danger', 1500);
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

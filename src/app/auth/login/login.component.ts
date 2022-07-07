import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  email: '';
  password: '';

  bubbles = false;
  constructor(
    private toastController: ToastController,
    public alertController: AlertController,
    private router: Router,
    private auth: AuthService
  ) {}
  ngOnInit() {}

  async onSubmit(formulario: NgForm) {
    this.bubbles = true;

    await this.auth.login(this.email, this.password).then((response) => {
      console.log(response);
    });
  }
  async presentToast(toastMessage: string, toastColor: string) {
    const toast = await this.toastController.create({
      cssClass: 'center',
      message: toastMessage,
      duration: 1000,
      color: toastColor,
    });
    toast.present();
  }

  async lol() {
    const res = await this.auth.lol();
    console.log(res);
  }
}

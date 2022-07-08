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
  isUser = true;
  bubbles = false;
  constructor(
    public alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private auth: AuthService
  ) {}
  ngOnInit() {}

  async onSubmit(formulario: NgForm) {
    this.bubbles = true;
    let response;
    if (this.isUser) {
      response = await this.auth.loginUser(this.email, this.password);
    } else {
      response = this.auth.loginOrg(this.email, this.password);
    }
    if (response.status === 200) {
      this.presentToast('Bienvenido', 'success', 750);
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 500);
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

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
      if (response?.status === 200) {
        this.presentToast('Iniciando sesión', 'success', 750);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);

        this.bubbles = false;
      } else {
        this.presentToast('Usuario o contraseña incorrectos', 'danger');
        this.bubbles = false;
      }
    });
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

  async lol() {
    const res = await this.auth.lol();
    console.log(res);
  }
}

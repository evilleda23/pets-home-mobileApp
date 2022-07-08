import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { User, Org } from '../../interfaces/interfaces';
import { AlertController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isUser = true;

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
    private router: Router
  ) {}
  ngOnInit() {}
  async onSubmit(formulario: NgForm) {
    this.bubbles = true;

    if (
      this.participante.password === this.participante.password2 ||
      this.participante.password === this.participante.password2
    ) {
      let response;
      if (this.isUser) {
        const user = {
          name: this.participante.name,
          email: this.participante.email,
          birthdate: this.participante.birthdate,
          password: this.participante.password,
        };
        response = await this.auth.register(user, this.isUser);
      } else {
        const org = {
          name: this.participante.name,
          email: this.participante.email,
          password: this.participante.password,
        };
        response = await this.auth.register(org, this.isUser);
      }
      console.log(response);

      if (response?.status === 200) {
        this.presentToast('Cuenta registrada correctamente', 'success', 750);
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 500);
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

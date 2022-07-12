import { Component, OnInit } from '@angular/core';
import { MenuController, ToastController } from '@ionic/angular';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  handlerMessage = '';
  isUser: false;
  participant: any;
  isLoading = true;
  constructor(
    private menuCtrl: MenuController,
    private storage: LocalStorageService,
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router
  ) {}
  ngOnInit() {
    this.menuCtrl.enable(true);
    this.isLoading = true;
    setTimeout(() => {
      this.storage.getCurrentParticipant().then((participant) => {
        this.participant = participant;
        this.isLoading = false;
      });
    }, 1000);
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Deseas salir de la sesión?',

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            this.onExit();
          },
        },
      ],
    });

    await alert.present();

    await alert.onDidDismiss();
  }

  async onExit() {
    await this.router.navigate(['/login']);
    setTimeout(() => {
      this.presentToast('Sesión cerrada', 'success', 1500);
    }, 500);
    this.storage.clear();
  }
  mostrarMenu() {
    this.menuCtrl.toggle();
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

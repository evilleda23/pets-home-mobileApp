/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
import { CuentasService } from '../../services/cuentas.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-donacion',
  templateUrl: './donacion.page.html',
  styleUrls: ['./donacion.page.scss'],
})
export class DonacionPage implements OnInit {
  cuenta = {
    noCuenta: '',
    banco: '',
    tipoCuenta: '',
  };
  constructor(
    private modalCtrl: ModalController,
    private toastController: ToastController,
    private cuentasService: CuentasService,
    private storage: LocalStorageService
  ) {}
  ngOnInit() {}
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  getBankItem(event) {
    this.cuenta.banco = event.detail.value;
    console.log(this.cuenta.banco);
  }
  getTypeItem(event) {
    this.cuenta.tipoCuenta = event.detail.value;
    console.log(this.cuenta.tipoCuenta);
  }
  async onSubmit(formulario: NgForm) {
    this.addAccount();
    return this.modalCtrl.dismiss(null, 'confirm');
  }
  async addAccount() {
    const resp = await this.cuentasService.registerCuenta(this.cuenta);
    const idCuenta = resp.data.IDCuentaDonacion;
    const particpant = await this.storage.getCurrentParticipant();
    console.log(particpant);

    const { idOrganizacion } = await this.cuentasService.getIDOrg(
      particpant._id
    );

    const response = await this.cuentasService.registerCuentaOrg(
      idCuenta,
      idOrganizacion
    );
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

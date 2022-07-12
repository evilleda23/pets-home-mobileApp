/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { CuentasService } from '../../services/cuentas.service';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.page.html',
  styleUrls: ['./cuentas.page.scss'],
})
export class CuentasPage implements OnInit {
  cuentas: any = [];
  constructor(
    private modalCtrl: ModalController,
    private cuentasService: CuentasService,
    private storage: LocalStorageService
  ) {}
  ngOnInit() {
    this.getAccounts();
  }

  async getIDOrg() {
    const particpant = await this.storage.getCurrentParticipant();

    const { idOrganizacion } = await this.cuentasService.getIDOrg(
      particpant._id
    );

    return idOrganizacion;
  }
  async getAccounts() {
    const idOrg = await this.getIDOrg();

    const resp = await this.cuentasService.getCuentas(idOrg);
    this.cuentas = [...resp];
    console.log(resp);
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
}

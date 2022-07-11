import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isUser: false;
  participant: any;
  isLoading = true;
  constructor(
    private menuCtrl: MenuController,
    private storage: LocalStorageService
  ) {}
  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.storage.getCurrentParticipant().then((participant) => {
        this.participant = participant;
        this.isLoading = false;
      });
    }, 1500);
  }
  mostrarMenu() {
    this.menuCtrl.toggle();
  }
}

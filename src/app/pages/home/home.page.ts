import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isUser: false;
  constructor(private menuCtrl: MenuController) {}

  ngOnInit() {}
  mostrarMenu() {
    this.menuCtrl.toggle();
  }
}

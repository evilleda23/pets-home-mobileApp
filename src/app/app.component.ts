import { Component, OnInit } from '@angular/core';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from './services/data.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  componentes: Observable<Componente[]>;
  constructor(private dataService: DataService, private platform: Platform) {}
  async ngOnInit() {
    this.componentes = await this.dataService.getMenuOpts();
  }
}

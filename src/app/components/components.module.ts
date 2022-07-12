import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { AlertComponent } from './alert/alert.component';
import { CuentaComponent } from './cuenta/cuenta.component';

@NgModule({
  declarations: [HeaderComponent, AlertComponent, CuentaComponent],
  exports: [HeaderComponent, AlertComponent, CuentaComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}

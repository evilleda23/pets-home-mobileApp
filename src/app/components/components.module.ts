import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [HeaderComponent, AlertComponent],
  exports: [HeaderComponent, AlertComponent],
  imports: [CommonModule, IonicModule],
})
export class ComponentsModule {}

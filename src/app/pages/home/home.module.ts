import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { ComponentsModule } from '../../components/components.module';
import { PublicacionPageModule } from '../publicacion/publicacion.module';
import { SeguimientoPageModule } from '../seguimiento/seguimiento.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PublicacionPageModule,
    SeguimientoPageModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

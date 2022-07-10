import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { SeguimientoPageModule } from '../seguimiento/seguimiento.module';
import { PublicacionPageModule } from '../publicacion/publicacion.module';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    PublicacionPageModule,
    SeguimientoPageModule,
    ComponentsModule,
  ],
  declarations: [HomePage],
})
export class HomePageModule {}

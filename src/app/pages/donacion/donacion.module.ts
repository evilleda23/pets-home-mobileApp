import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonacionPageRoutingModule } from './donacion-routing.module';

import { DonacionPage } from './donacion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DonacionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DonacionPage]
})
export class DonacionPageModule {}

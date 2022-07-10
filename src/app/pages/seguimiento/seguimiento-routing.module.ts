import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoPage } from './seguimiento.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoPageRoutingModule {}

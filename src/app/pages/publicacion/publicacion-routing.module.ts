import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicacionPage } from './publicacion.page';

const routes: Routes = [
  {
    path: '',
    component: PublicacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicacionPageRoutingModule {}

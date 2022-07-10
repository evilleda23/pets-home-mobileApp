import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { HomePageModule } from './home/home.module';
import { HomePage } from './home/home.page';
//Modulos

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutPageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./chat/chat.module').then((m) => m.ChatPageModule),
  },
  {
    path: 'publicacion',
    loadChildren: () =>
      import('./publicacion/publicacion.module').then(
        (m) => m.PublicacionPageModule
      ),
  },
  {
    path: 'seguimiento',
    loadChildren: () =>
      import('./seguimiento/seguimiento.module').then(
        (m) => m.SeguimientoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//Modulos
import { AuthModule } from './auth/auth.module';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

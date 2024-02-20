import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./Pages/home/home.page').then(m => m.HomePage),
  },
  {
    path: 'videos',
    loadComponent: () => import('./layouts/v-master/v-master.page').then((m) => m.VMasterPage),
    loadChildren: () => import('./Modules/v-master/v-master.module').then((m) => m.VMasterModule),
  },
  {
    path: 'audios',
    loadComponent: () => import('./layouts/master/master.page').then((m) => m.MasterPage),
    loadChildren: () => import('./Modules/master/master.module').then((m) => m.MasterModule),
  },
  {
    path: 'shops',
    loadComponent: () => import('./layouts/master/master.page').then((m) => m.MasterPage),
    loadChildren: () => import('./Modules/master/master.module').then((m) => m.MasterModule),
  },
  {
    path: '**',
    loadComponent: () => import('./Pages/page-not-found/page-not-found.page').then( m => m.PageNotFoundPage)
  },
 
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./Pages/home/home.page').then(m => m.HomePage)
  },
  {
    path: 'v-tube',
    loadComponent: () => import('./layouts/vt-master/vt-master.page').then((m) => m.VtMasterPage),
    loadChildren: () => import('./Modules/vt-master/vt-master.module').then((m) => m.VtMasterModule),
  },
  {
    path: 'v-tune',
    loadComponent: () => import('./layouts/master/master.page').then((m) => m.MasterPage),
    loadChildren: () => import('./Modules/master/master.module').then((m) => m.MasterModule),
  },
  {
    path: 'v-chat',
    loadComponent: () => import('./layouts/master/master.page').then((m) => m.MasterPage),
    loadChildren: () => import('./Modules/master/master.module').then((m) => m.MasterModule),
  },
  {
    path: 'v-cart',
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

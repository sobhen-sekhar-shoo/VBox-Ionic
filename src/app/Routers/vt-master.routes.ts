import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadComponent: () => import('../Pages/vt-home/vt-home.page').then( m => m.VtHomePage)
  },
  {
    path: 'watch',
    loadComponent: () => import('../Pages/watch/watch.page').then( m => m.WatchPage)
  },
  
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class VtRoutsModule { }

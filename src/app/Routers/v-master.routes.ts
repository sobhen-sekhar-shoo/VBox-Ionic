import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

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
export class VRoutsModule { }

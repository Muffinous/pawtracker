import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'index',
        loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'home',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'index',
    pathMatch: 'full'
  },
  {
    path: 'cal-modal-page',
    loadChildren: () => import('./cal-modal-page/cal-modal-page.module').then( m => m.CalModalPagePageModule)
  },
  {
    path: 'cal-modal',
    loadChildren: () => import('./cal-modal/cal-modal.module').then( m => m.CalModalPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

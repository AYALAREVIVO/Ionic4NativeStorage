import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { mainModule } from 'process';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'log-in',
    loadChildren: () => import('./pages/log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'sidor',
    loadChildren: () => import('./pages/sidor/sidor.module').then( m => m.SidorPageModule)
  },
  {
    path: 'time-today',
    loadChildren: () => import('./pages/time-today/time-today.module').then( m => m.TimeTodayPageModule)
  },
  {
    path: 'get',
    loadChildren: () => import('./pages/get/get.module').then( m => m.GetPageModule)
  },
  {
    path: 'tfila',
    loadChildren: () => import('./pages/tfila/tfila.module').then( m => m.TfilaPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./pages/store/store.module').then( m => m.StorePageModule)
  },
  {
    path: 'cart-modal',
    loadChildren: () => import('./pages/cart-modal/cart-modal.module').then( m => m.CartModalPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./pages/new/new.module').then( m => m.NewPageModule)
  },
  {
    path: 'property',
    loadChildren: () => import('./pages/property/property.module').then( m => m.PropertyPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

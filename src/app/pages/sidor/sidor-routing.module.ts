import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidorPage } from './sidor.page';

const routes: Routes = [
  {
    path: '',
    component: SidorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidorPageRoutingModule {}

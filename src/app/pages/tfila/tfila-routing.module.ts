import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TfilaPage } from './tfila.page';

const routes: Routes = [
  {
    path: '',
    component: TfilaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TfilaPageRoutingModule {}

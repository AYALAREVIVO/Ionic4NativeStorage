import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetPage } from './get.page';

const routes: Routes = [
  {
    path: '',
    component: GetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetPageRoutingModule {}

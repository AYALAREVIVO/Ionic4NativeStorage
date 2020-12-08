import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimeTodayPage } from './time-today.page';

const routes: Routes = [
  {
    path: '',
    component: TimeTodayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimeTodayPageRoutingModule {}

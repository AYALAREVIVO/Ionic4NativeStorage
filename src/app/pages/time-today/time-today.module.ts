import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimeTodayPageRoutingModule } from './time-today-routing.module';

import { TimeTodayPage } from './time-today.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeTodayPageRoutingModule
  ],
  declarations: [TimeTodayPage]
})
export class TimeTodayPageModule {}

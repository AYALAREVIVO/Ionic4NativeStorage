import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetPageRoutingModule } from './get-routing.module';

import { GetPage } from './get.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetPageRoutingModule
  ],
  declarations: [GetPage]
})
export class GetPageModule {}

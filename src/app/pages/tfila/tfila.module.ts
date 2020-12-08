import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TfilaPageRoutingModule } from './tfila-routing.module';

import { TfilaPage } from './tfila.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TfilaPageRoutingModule
  ],
  declarations: [TfilaPage]
})
export class TfilaPageModule {}

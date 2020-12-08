import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SidorPageRoutingModule } from './sidor-routing.module';

import { SidorPage } from './sidor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SidorPageRoutingModule
  ],
  declarations: [SidorPage]
})
export class SidorPageModule {}

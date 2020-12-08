import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TfilaPage } from '../tfila/tfila.page';

@Component({
  selector: 'app-get',
  templateUrl: './get.page.html',
  styleUrls: ['./get.page.scss'],
})
export class GetPage implements OnInit {

  
  constructor(public modalController: ModalController) {
   
    let date = new Date()
    console.log("Current Date ",date) ;
  }

  ngOnInit() {
  }
  async goAnOtherPage(event,item:string) {
    const modal = await this.modalController.create({
      component:TfilaPage ,
      cssClass: 'my-custom-class',
      componentProps: {
        'item': item
      }
    });    
    return await modal.present();
  }
}

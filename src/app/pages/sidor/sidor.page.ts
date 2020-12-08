import { Component, OnInit, ViewChild } from '@angular/core';
// import{} from '';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';
import { ActionSheetController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-sidor',
  templateUrl: './sidor.page.html',
  styleUrls: ['./sidor.page.scss'],
})
export class SidorPage implements OnInit {
  pages=[];
  tfilos={
    cssClass: 'my-custom-class',
    buttons: [
      {
      text: 'שחרית',
      handler: () => {
        this.presentActionSheet(1);}
    }
    ,
    {
      text: 'מנחה',
      handler: () => {
        this.presentActionSheet(2);}
    },
    {
      text: 'ערבית',
      handler: () => {
        this.presentActionSheet(3);}
    }
  ]
  };
    option;
    @ViewChild(IonSlides) slides: IonSlides;
    shacharit={
      cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'ברכות השחר',
        handler: () => {
          this.next(0);}
      }
      ,
      {
        text: '18',
        handler: () => {
          this.next(1);}
      },
      {
        text: 'פתח אליהו',
        handler: () => {
          this.next(2);}
      }
    ]
    };
    mincha={
      cssClass: 'my-custom-class',
      buttons: [
        {
        text: 'אשרי',
        handler: () => {
          this.next(0);}
      }
      ,
      {
        text: '18',
        handler: () => {
          this.next(1);}
      },
      {
        text: 'עלינו לשבח',
        handler: () => {
          this.next(2);}
      }
    ]
    };
  constructor(public actionSheetController: ActionSheetController) { 
    this.option=[this.shacharit,this.mincha];
    for (let index = 0; index < 3; index++) {
       this.pages[index]=["../../../assets/"+(index+1)+".jpg"];
    }

  }

  ngOnInit() {
  }
 
  
  next(index) {
    
    this.slides.slideTo(index, 500);
  }

  async presentActionSheet(item) {
    
    const actionSheet = await this.actionSheetController.create(this.option[item-1]);
    await actionSheet.present();
  }
  async actionSheet() {
    const actionSheet = await this.actionSheetController.create(this.tfilos);
    await actionSheet.present();
  }
ddd(event){
if(event==null)
alert("e")
}
}

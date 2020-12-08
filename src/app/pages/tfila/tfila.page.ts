import { Component, Input, OnInit } from '@angular/core';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-tfila',
  templateUrl: './tfila.page.html',
  styleUrls: ['./tfila.page.scss'],
})
export class TfilaPage implements OnInit {

  imgSRC="assets/imgs/m2.jpg";
  sub:any;
  @Input() item: string;
  date;
  d1;d2;d3;d4;
  now;
    constructor(public timeService:TimeService) {    
      this.now=new Date();
      this.date=this.timeService.date;
      this.d1=this.timeService.startMashiv;
      this.d2=this.timeService.endMashiv;
      this.d3=this.timeService.startBarechalino;
      this.d4=this.timeService.endBarechalino;
     // this.imgSRC="assets/imgs/"+this.item+"2"+".jpg";
      // this.pdfGenerator.fromURL('src/assets/imgs/הזמנה.pdf').then(base64String => console.log(base64String));
    }
    sizeFont(number:any)
  {
  this.imgSRC="assets/imgs/"+this.item+number+".jpg";
  }
  ngOnInit(){
   
    
  }
}

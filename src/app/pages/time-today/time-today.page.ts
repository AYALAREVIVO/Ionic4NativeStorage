import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-time-today',
  templateUrl: './time-today.page.html',
  styleUrls: ['./time-today.page.scss'],
})
export class TimeTodayPage implements OnInit {
  date; bigDate; zmanim;
  constructor(public loadingController: LoadingController, public t: TimeService) {
    this.presentLoading();
    this.zmanim = this.t.zmanim;
 this.d1=this.t.startMashiv;
 this.d2=this.t.endMashiv;
 this.d3=this.t.startBarechalino;
 this.d4=this.t.endBarechalino;

  }
  d1; d2; d3; d4;

  async f() {
      this.date = this.t.date;
          this.t.setBigDate().subscribe(countries => { this.bigDate = countries; });


  }
  async presentLoading() {
    this.f();
    const loading = await this.loadingController.create({
      duration: 2000
    });


  }

  ngOnInit() {
  }

}

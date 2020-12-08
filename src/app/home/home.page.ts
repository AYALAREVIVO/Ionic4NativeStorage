import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { LoadingController } from '@ionic/angular';
import { TimeService } from '../services/time.service';
import { CartService } from '../services/cart.service';
import { SMS } from '@ionic-native/sms/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  // Hebcal = require('hebcal');

  constructor(private sms: SMS,public cart: CartService, public time: TimeService, public t: TimeService, public loadingController: LoadingController, private router: Router, private userService: UserService) {
    this.presentLoading();
    // t.setTime();

  }
aaa(){
  this.router.navigateByUrl('store');

  // alert("fd")
  // this.sms.send('+9727130305', 'אבא אם קיבלת את ההודעה הזאת תתקשר אלי מהר ותגיד לי כי זה עובד ואין לי דרך אחרת לבדוק')
  // .then(function() {
  //   alert('Success');
  //   // Success! SMS was sent
  // }, function(error) {
  //   alert('Error'+error);
  //   // An error occurred
  // });

}
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 2000
    });
    this.a();
  }
  async a() {
    // if(await this.userService.isExist()=="Null"){
    //   this.router.navigateByUrl('log-in');
    // };

  }
  ngOnInit() {
  }
  gotolog() {
    this.router.navigateByUrl('log-in');

  }
}




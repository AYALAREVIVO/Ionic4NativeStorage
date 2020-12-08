import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  constructor(private userService:UserService,private  router:  Router) {
   }

  ngOnInit() {
  }
  login(form){
    this.userService.login(form.value)
    this.router.navigateByUrl('home');
  }
  a(){
    this.router.navigateByUrl('home');
  }
  b(){
    this.router.navigateByUrl('sidor');
  }
  c(){
    this.router.navigateByUrl('get');
  }
  d(){
    this.router.navigateByUrl('time-today');
  }
  e(){
    this.router.navigateByUrl('store');
  }
}

import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../class/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = "http://176.58.115.13:3000/"
user:User;
  constructor(private nativeStorage: NativeStorage,private http:HttpClient) { }
  login(form){
    this.nativeStorage.setItem('user', form);
    this.user={userID:"",name:form.name,pass:form.pass,phon:form.phon,ShoppingCart:""};
    this.http.post<any>(this.url+'users',this.user).subscribe(data => {
     alert(data.id);})
  }
 async isExist(){
   return this.nativeStorage.getItem('user')
    .then(
      data => {return data}
      ,
      error => {return "Null"}
    );
  }
  keys() {
    this.nativeStorage.keys()
      // .then(
      //   data => alert(data),
      //   error => alert(error)
      // );
  }
  remove() {
    this.nativeStorage.remove('user')
      // .then(
      //   data => {alert("remove"+data);},
      //   error => alert(error)
      // );
     
  }
  clear() {
    this.nativeStorage.clear()
      // .then(
      //   data => {alert(data)},
      //   error => alert(error)
      // );
  }
}

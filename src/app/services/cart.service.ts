import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../class/product';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
a:string[]
  data: Product[] = [];
  private cart = [];
  private cartItemCount = new BehaviorSubject(0);
  public baseURL="http://176.58.115.13:3000/products";




  constructor(public http:HttpClient,public userService:UserService) {
  //   this.a=this.userService.user.ShoppingCart.split(',');
  //   this.http.get<any>(this.baseURL).subscribe(data => {
  //   this.data=data;
  //   for (let index = 0; index < this.a.length; index++) {
  //     if(this.a[index]!="" && this.a[index]!=",")
  //     this.http.get<any>(this.baseURL+'/'+this.a[index]).subscribe(data=>{
  //       this.cart.push(data);
  //     })
  //   }
  // })
  this.data.push({productID:1,name:"fefe",amount:10,description:"i love you",img:"../assets/1.jpg",isNew:true,price:10});
  this.data.push({productID:2,name:"fefe",amount:10,description:"i love  you too",img:"../assets/1.jpg",isNew:true,price:10});

  }
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  getCartItemCount() {
    return this.cartItemCount;
  }
 
  addProduct(product) {
    alert(product.productID)

    let added = false;
    for (let p of this.cart) {
      if (p.productID  == product.productID) {
        alert("yes")
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      product.amount = 1;
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }
  
 
  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    if(this.cartItemCount.value>=1)
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }
 
  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }}

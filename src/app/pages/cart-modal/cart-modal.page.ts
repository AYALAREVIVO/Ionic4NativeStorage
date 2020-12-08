import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { Product } from 'src/app/class/product';
import { CartService } from 'src/app/services/cart.service';
import { PropertyPage } from '../property/property.page';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {
  cart: Product[] = [];
 
  constructor(public modalController: ModalController,public navCtrl: NavController,public router:Router,
    public n: NavController,
    private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }
 
  ngOnInit() {
    this.cart = this.cartService.getCart();
  }
 
  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }
 
  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }
 
  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }
 
  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }
 
  close() {
    this.modalCtrl.dismiss();
  }
 
  // async checkout() {
  //   // Perfom PayPal or Stripe checkout process
 
  //   let alert = await this.alertCtrl.create({
  //     header: 'Thanks for your Order!',
  //     message: 'We will deliver your food as soon as possible',
  //     buttons: ['OK']
  //   });
  //   alert.present().then(() => {
  //     this.modalCtrl.dismiss();
  //   });
  // }

  async checkout() {
    alert("dwd");
  
    const modal = await this.modalController.create({
      component: PropertyPage,
      cssClass: 'my-custom-class',

    });

    
    return await modal.present();
  }

}

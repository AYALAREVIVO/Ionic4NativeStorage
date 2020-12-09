import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { CartModalPage } from '../cart-modal/cart-modal.page';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {


  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;

  @ViewChild('cart', { static: false, read: ElementRef }) fab: ElementRef;

  constructor(public loadingController: LoadingController, private cartService: CartService, private modalCtrl: ModalController) {
    this.presentLoading();
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      duration: 5000
    });
    this.do();
  }
  async do() {
    this.products = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.cartItemCount = this.cartService.getCartItemCount();
  }
  aa() {
    alert("ss")
  }
  ngOnInit() {

  }
  // Hidden: boolean;
  // i = true;
  // hidden(p) {
  //   let f = document.getElementById(p.productID);
  //   let aaa = f.attributes.length;
  //   let index = 0;
  //   for (index = 0; index < aaa; index++) {
  //     if (f.attributes[index].name == "hidden") {
  //       break;
  //     }
  //   }
  //   if (index < aaa && f.attributes[index].name == "hidden") { f.removeAttribute("hidden"); }
  //   if (index == aaa)
  //     f.setAttribute("hidden", "hidden");
  // }

  aaa = 'https://www.stickdecor.co.il/files/products/image1_1697_2016-09-19_10-43-16.jpg';
  addToCart(product) {
    this.cartService.addProduct(product);
    this.animateCSS('tada');
  }
  removeToCart(product) {
    this.cartService.decreaseProduct(product);
    this.animateCSS('tada');
  }

  async openCart() {
    alert("ff");
    this.animateCSS('bounceOutLeft', true);

    let modal = await this.modalCtrl.create({
      component: CartModalPage,
      cssClass: 'cart-modal'
    });
    modal.onWillDismiss().then(() => {
      this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
      this.animateCSS('bounceInLeft');
    });
    modal.present();
  }

  animateCSS(animationName, keepAnimated = false) {
    const node = this.fab.nativeElement;
    node.classList.add('animated', animationName)

    //https://github.com/daneden/animate.css
    function handleAnimationEnd() {
      if (!keepAnimated) {
        node.classList.remove('animated', animationName);
      }
      node.removeEventListener('animationend', handleAnimationEnd)
    }
    node.addEventListener('animationend', handleAnimationEnd)
  }



}

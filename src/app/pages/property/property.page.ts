import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/class/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-property',
  templateUrl: './property.page.html',
  styleUrls: ['./property.page.scss'],
})
export class PropertyPage implements OnInit {
  id: any;
  cart: Product[] = [];

  constructor(private cartService: CartService ) { 
alert("xmeijc");
  }

  ngOnInit() {
    this.cart = this.cartService.getCart();

  }



send(firstname,lastname,phon){
  
   alert(firstname+lastname+phon);
  }
}

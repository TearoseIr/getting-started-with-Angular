import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {CartService} from '../cart.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor(private cartService:CartService,
    private formBuilder: FormBuilder){}

  checkoutForm = this.formBuilder.group({
      name:'',
      address: ''
    });

    onSubmit(){
      this.items = this.cartService.clearCart();
      console.log('вывести массив товаров корзины ', this.items);

      console.warn('Your order has been submitted ', this.checkoutForm.value);
      this.checkoutForm.reset();
    }
}

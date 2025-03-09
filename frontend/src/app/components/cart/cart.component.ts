import { Component } from '@angular/core';
import {CartService} from "../../shared/service/admin/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cartService: CartService) {
  }

  get cartVisible(): boolean {
    return this.cartService.cartVisible;
  }

  set cartVisible(value: boolean) {
    this.cartService.cartVisible = value;
  }

  closeCart() {
    this.cartService.cartVisible = false;
  }
}

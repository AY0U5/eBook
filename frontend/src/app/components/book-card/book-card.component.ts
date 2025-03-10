import {Component, Input} from '@angular/core';
import {CartService} from "../../shared/service/open/cart.service";
import {ToastService} from "../../shared/service/toast.service";
import {BookDto} from "../../shared/models/book-dto";
import {CartDto} from "../../shared/models/cart-dto";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrl: './book-card.component.css'
})
export class BookCardComponent {

  @Input() title: string;
  @Input() description: string;
  @Input() pictureName: string;
  @Input() author: string;
  @Input() category: string;
  @Input() price: number;
  @Input() book: BookDto;


  constructor(
    private cartService: CartService,
    private toast: ToastService
  ) {
  }

  addToCart(item : BookDto){
    this.cartService.addToCart(item).subscribe({
      next:(data)=> {
        this.item = data
      },
      error:()=>{
        this.toast.show("Error in adding book to cart")
      }
    })
  }

  get item(): CartDto {
    return this.cartService.item;
  }

  set item(value: CartDto) {
    this.cartService.item = value;
  }

  get items(): Array<CartDto> {
    return this.cartService.items;
  }

  set items(value: Array<CartDto>) {
    this.cartService.items = value;
  }
}

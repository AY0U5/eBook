import {Component, OnInit} from '@angular/core';
import {CartService} from "../../shared/service/open/cart.service";
import {CartDto} from "../../shared/models/cart-dto";
import {ToastService} from "../../shared/service/toast.service";
import {BookDto} from "../../shared/models/book-dto";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{


  ngOnInit() {
    this.findLastCart()
  }

  constructor(
    private cartService: CartService,
    private toast: ToastService
  ) {
  }

  findLastCart(){
    this.cartService.findLastCart().subscribe({
      next:(data)=>{
        this.item = data
      },
      error:(err)=>{
        this.toast.show("Error , Sorry try later!")
      }
    })
  }

  get cartVisible(): boolean {
    return this.cartService.cartVisible;
  }

  set cartVisible(value: boolean) {
    this.cartService.cartVisible = value;
  }

  closeCart() {
    this.cartVisible = !this.cartVisible;
    if (this.cartVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }

  removeFromCart(book: BookDto){
    this.cartService.removeFromCart(book).subscribe({
      next:(data)=>{
        this.item = data
      },
      error:(err)=>{
        this.toast.show("Error!!")
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

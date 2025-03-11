import {Component, HostListener} from '@angular/core';
import {CartService} from "../../shared/service/open/cart.service";
import {CartDto} from "../../shared/models/cart-dto";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuOpen: boolean = false;
  scrolledUp = false;

  constructor(
    private cartService: CartService
  ) {
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const currentScroll = window.scrollY;
    this.scrolledUp = currentScroll > 20;
  }

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  openCart() {
    this.cartVisible = !this.cartVisible;
    if (this.cartVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }



  get cartVisible(): boolean {
    return this.cartService.cartVisible;
  }

  set cartVisible(value: boolean) {
    this.cartService.cartVisible = value;
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

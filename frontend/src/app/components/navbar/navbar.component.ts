import {Component, HostListener} from '@angular/core';
import {CartService} from "../../shared/service/open/cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  menuOpen: boolean = false;
  scrolledUp = false;

  constructor(private cartService: CartService) {
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
    this.cartService.cartVisible = true;
  }

  get cartVisible(): boolean {
    return this.cartService.cartVisible;
  }

  set cartVisible(value: boolean) {
    this.cartService.cartVisible = value;
  }
}

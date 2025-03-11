import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AccountToogleComponent} from './account-toogle/account-toogle.component';
import {
  LucideAngularModule, ChevronsUpDown, Search, LayoutDashboard, BookOpen, CloudDownload, BookCopy,
  LibraryBig, Package, Signature, LogOut, Calendar, Layers2, LayoutGrid, Heart, User, ShoppingCart, X, LayoutTemplate,
  Facebook, Twitter, Instagram,Eye
}
  from 'lucide-angular';
import {SearchBarComponent} from './search-bar/search-bar.component';
import {TopBarComponent} from './top-bar/top-bar.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CartComponent} from './cart/cart.component';
import {CardComponent} from './card/card.component';
import {FooterComponent} from './footer/footer.component';
import {BookCardComponent} from './book-card/book-card.component';
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    SidebarComponent,
    AccountToogleComponent,
    SearchBarComponent,
    TopBarComponent,
    NavbarComponent,
    CartComponent,
    CardComponent,
    FooterComponent,
    BookCardComponent
  ],
  exports: [
    SidebarComponent,
    TopBarComponent,
    NavbarComponent,
    CardComponent,
    FooterComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({
      ChevronsUpDown,
      Search,
      LayoutDashboard,
      BookOpen,
      CloudDownload,
      BookCopy,
      LibraryBig,
      Package,
      Signature,
      LogOut,
      Calendar,
      Layers2,
      LayoutGrid,
      Heart,
      User,
      ShoppingCart,
      X,
      LayoutTemplate,
      Facebook,
      Twitter,
      Instagram,
      Eye
    }),
    RouterLink
  ]
})
export class ComponentsModule {
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountToogleComponent } from './account-toogle/account-toogle.component';
import { LucideAngularModule, ChevronsUpDown , Search ,LayoutDashboard,
  LibraryBig,Package,Signature,LogOut,Calendar,Layers2,LayoutGrid,Heart,User,ShoppingCart,X}
  from 'lucide-angular';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AccountToogleComponent,
    SearchBarComponent,
    TopBarComponent,
    NavbarComponent,
    CartComponent
  ],
  exports: [
    SidebarComponent,
    TopBarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ ChevronsUpDown,Search,LayoutDashboard,
      LibraryBig,Package,Signature,LogOut,Calendar,Layers2,LayoutGrid,Heart,User,ShoppingCart,X})
  ]
})
export class ComponentsModule { }

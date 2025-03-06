import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountToogleComponent } from './account-toogle/account-toogle.component';
import { LucideAngularModule, ChevronsUpDown , Search ,LayoutDashboard,
  LibraryBig,Package,Signature,LogOut,Calendar,Layers2}
  from 'lucide-angular';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';



@NgModule({
  declarations: [
    SidebarComponent,
    AccountToogleComponent,
    SearchBarComponent,
    TopBarComponent
  ],
  exports: [
    SidebarComponent,
    TopBarComponent
  ],
  imports: [
    CommonModule,
    LucideAngularModule.pick({ ChevronsUpDown,Search,LayoutDashboard,
      LibraryBig,Package,Signature,LogOut,Calendar,Layers2})
  ]
})
export class ComponentsModule { }

import { NgModule } from '@angular/core';
import {CategoryComponent} from "./category/category.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {RouterLink} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    CategoryComponent,
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    RouterLink,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
  ],
  exports: [
    CategoryComponent,
    NavbarComponent,
    SidebarComponent
  ],
})
export class ShareModule { }

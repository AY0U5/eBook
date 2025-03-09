import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ComponentsModule} from "../../../components/components.module";
import { BooksComponent } from './books/books.component';



@NgModule({
  declarations: [
    HomeComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class OpenModule { }

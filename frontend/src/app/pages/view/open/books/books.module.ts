import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BooksComponent} from "./books-list/books.component";
import {ComponentsModule} from "../../../../components/components.module";
import {LucideAngularModule} from "lucide-angular";
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [
    BooksComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LucideAngularModule,
  ]
})
export class BooksModule { }

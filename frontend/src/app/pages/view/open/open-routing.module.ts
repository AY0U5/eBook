import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BooksComponent} from "./books/books-list/books.component";
import {BookComponent} from "./books/book/book.component";

const routes: Routes = [
  {
    path:'',
    component: BooksComponent
  },
  {
    path:'book',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenRoutingModule { }

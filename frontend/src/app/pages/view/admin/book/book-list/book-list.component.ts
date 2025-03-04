import { Component } from '@angular/core';
import {BookService} from "../../../../../shared/service/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {

  constructor(private bookService: BookService) { }


  openCreate() {
    this.visible = true;
  }

  get visible(): boolean {
    return this.bookService.visible;
  }

  set visible(value: boolean) {
    this.bookService.visible = value;
  }
}

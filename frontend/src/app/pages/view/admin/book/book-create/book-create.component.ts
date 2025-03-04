import { Component } from '@angular/core';
import {BookService} from "../../../../../shared/service/book.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export class BookCreateComponent {

  authors = ['Voltaire', 'Victor Hugo', 'Jane Austen', 'George Orwell'];
  categories = ['Science Fiction', 'Romance', 'Fantasy', 'History'];

  constructor(private bookService: BookService) { }

  cancel() {
    this.visible = false;
  }

  saveBook() {
    this.visible = false;
  }


  get visible(): boolean {
    return this.bookService.visible;
  }

  set visible(value: boolean) {
    this.bookService.visible = value;
  }

}

import { Component } from '@angular/core';
import {BookService} from "../../../../../shared/service/book.service";
import {BookDto} from "../../../../../shared/models/book-dto";
import {ToastService} from "../../../../../shared/service/toast.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export class BookCreateComponent {

  authors = ['Voltaire', 'Victor Hugo', 'Jane Austen', 'George Orwell'];
  categories = ['Science Fiction', 'Romance', 'Fantasy', 'History'];

  constructor(
    private bookService: BookService,
    private toastService: ToastService
  ) { }

  cancel() {
    this.visible = false;
  }

  saveBook() {
    this.bookService.create().subscribe({
      next: (value) => {
        this.visible = false;
        this.toastService.showToast('Book '+value.title+' created successfully', 'success');
      },
      error:(error) => {
        this.visible = false;
        this.toastService.showToast('Error!!!', 'error');
      }
    })
  }


  get visible(): boolean {
    return this.bookService.visible;
  }

  set visible(value: boolean) {
    this.bookService.visible = value;
  }

  get item(): BookDto {
    return this.bookService.item;
  }

  set item(value: BookDto) {
    this.bookService.item = value;
  }

  get items(): Array<BookDto> {
    return this.bookService.items;
  }

  set items(value: Array<BookDto>) {
    this.bookService.items = value;
  }
}

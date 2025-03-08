import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../../shared/service/book.service";
import {ToastService} from "../../../../../shared/service/toast.service";
import {BookDto} from "../../../../../shared/models/book-dto";
import {BookCategoryDto} from "../../../../../shared/models/book-category-dto";
import {CategoryService} from "../../../../../shared/service/category.service";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent implements OnInit{

  file: File ;
  categories: Array<BookCategoryDto>

  constructor(
    private bookService: BookService,
    private toast: ToastService,
    private bookCategoryService: CategoryService
  ) { }

  ngOnInit() {
    this.findAllCategories()
  }

  cancel() {
    this.editVisible = false;
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  findAllCategories() {
    this.bookCategoryService.findAll().subscribe({
      next: (value) => {
        this.categories = value;
      },
      error: (error) => {
        this.toast.show('Error fetching categories');
      }
    })
  }

  editBook() {
    this.bookService.edit(this.file).subscribe({
      next: (value) => {
        this.editVisible = false;
        this.item = new BookDto();
        this.toast.show('Book updated successfully');
      },
      error:(error) => {
        this.editVisible = false;
        this.item = new BookDto();
        this.toast.show('Error updating book');
      }
    })
  }

  get editVisible(): boolean {
    return this.bookService.editVisible;
  }

  set editVisible(value: boolean) {
    this.bookService.editVisible = value;
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

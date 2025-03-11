import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../../shared/service/admin/book.service";
import {BookDto} from "../../../../../shared/models/book-dto";
import {ToastService} from "../../../../../shared/service/toast.service";
import {BookCategoryDto} from "../../../../../shared/models/book-category-dto";
import {CategoryService} from "../../../../../shared/service/admin/category.service";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrl: './book-create.component.css'
})
export class BookCreateComponent implements OnInit{

  file: File ;
  categories: Array<BookCategoryDto>

  constructor(
    private bookService: BookService,
    private toast: ToastService,
    private bookCategoryService: CategoryService
  ) { }

  ngOnInit() {
    this.findAllCategories();
  }

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  cancel() {
    this.visible = false;
  }

  saveBook() {
    this.bookService.create(this.file).subscribe({
      next: (value) => {
        this.items.push(value);
        this.visible = false;
        this.item = new BookDto();
        this.toast.showTopRight('Book created successfully');
      },
      error:(error) => {
        this.visible = false;
        this.item = new BookDto();
        this.toast.showTopRight('Error creating book');
      }
    })
  }

  findAllCategories() {
    this.bookCategoryService.findAll().subscribe({
      next: (value) => {
        this.categories = value;
      },
      error: (error) => {
        this.toast.showTopRight('Error fetching categories');
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

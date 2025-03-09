import {Component, OnInit} from '@angular/core';
import {BookService} from "../../../../../shared/service/admin/book.service";
import {BookDto} from "../../../../../shared/models/book-dto";
import {ToastService} from "../../../../../shared/service/toast.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent implements OnInit{

  title: string = '';
  author: string = '';
  categoryName: string = '';
  page: number = 1;
  itemsPerPage: number = 7;

  ngOnInit(): void {
    this.findAll();
  }

  constructor(
    private bookService: BookService,
    private toast: ToastService
  ) { }

  findAll(){
    this.bookService.findAll().subscribe(data => {
      this.bookService.items = data;
    });
  }

  deleteByRef(ref: string){
    this.bookService.deleteByRef(ref).subscribe({
      next: () => {
        this.items = this.items.filter(item => item.ref !== ref);
        this.toast.show("Book deleted successfully");
      }
    });
  }

  onSearch(event: Event): void {
    event.preventDefault();

    if (!this.title.trim() && !this.author.trim() && !this.categoryName.trim()) {
      this.findAll();
    } else {
      this.search(this.title, this.author, this.categoryName);
    }
  }

  search(title: string, author: string, categoryName: string){
    this.bookService.search(title, author, categoryName).subscribe({
      next: (data) => {
        this.items = data;
      },
      error: (err) => {
        this.toast.show("Book not found")
      }
    });
  }

  openEdit(item: BookDto){
    this.editVisible = true;
    this.item = item;
  }

  get editVisible(): boolean {
    return this.bookService.editVisible;
  }

  set editVisible(value: boolean) {
    this.bookService.editVisible = value;
  }

  openCreate() {
    this.visible = true;
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

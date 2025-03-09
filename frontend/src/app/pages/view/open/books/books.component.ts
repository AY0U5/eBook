import {Component, OnInit} from '@angular/core';
import {OpenBookService} from "../../../../shared/service/open/open-book.service";
import {BookDto} from "../../../../shared/models/book-dto";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent implements OnInit{

  constructor(private service: OpenBookService) {
  }

  ngOnInit() {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe({
      next: (value) => {
        this.items = value;
      }
    })
  }

  get item(): BookDto {
    return this.service.item;
  }

  set item(value: BookDto) {
    this.service.item = value;
  }

  get items(): Array<BookDto> {
    return this.service.items;
  }

  set items(value: Array<BookDto>) {
    this.service.items = value;
  }
}

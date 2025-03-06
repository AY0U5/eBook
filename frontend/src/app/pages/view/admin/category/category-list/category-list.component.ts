import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../../shared/service/category.service";
import {BookCategoryDto} from "../../../../../shared/models/book-category-dto";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  constructor(private categoryService: CategoryService) {
  }

  ngOnInit() {
    this.findAll();
  }

  openCreate() {
    this.visible = true;
  }

  findAll(){
    this.categoryService.findAll().subscribe({
      next: (value) => {
        this.items = value;
      }
    })
  }

  get visible(): boolean {
    return this.categoryService.visible;
  }

  set visible(value: boolean) {
    this.categoryService.visible = value;
  }

  get item(): BookCategoryDto {
    return this.categoryService.item;
  }

  set item(value: BookCategoryDto) {
    this.categoryService.item = value;
  }

  get items(): Array<BookCategoryDto> {
    return this.categoryService.items;
  }

  set items(value: Array<BookCategoryDto>) {
    this.categoryService.items = value;
  }
}

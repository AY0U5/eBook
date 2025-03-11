import { Component } from '@angular/core';
import {CategoryService} from "../../../../../shared/service/admin/category.service";
import {BookCategoryDto} from "../../../../../shared/models/book-category-dto";
import {ToastService} from "../../../../../shared/service/toast.service";

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrl: './category-edit.component.css'
})
export class CategoryEditComponent {

  constructor(
    private categoryService: CategoryService,
    private toast: ToastService
  ) {
  }

  editCategory(){
    this.categoryService.edit().subscribe({
      next: (value) => {
        this.editVisible = false;
        this.items.push(value)
        this.item = new BookCategoryDto();
        this.toast.showTopRight("Category updated successfully")
      },
      error: (err) => {
        this.editVisible = false;
        this.item = new BookCategoryDto();
        this.toast.showTopRight("Error updating category")
      }
    })
  }

  cancel() {
    this.editVisible = false;
  }

  get editVisible(): boolean {
    return this.categoryService.editVisible;
  }

  set editVisible(value: boolean) {
    this.categoryService.editVisible = value;
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

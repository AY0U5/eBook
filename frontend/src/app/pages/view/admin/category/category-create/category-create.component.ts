import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../../shared/service/admin/category.service";
import {BookCategoryDto} from "../../../../../shared/models/book-category-dto";
import {ToastService} from "../../../../../shared/service/toast.service";

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrl: './category-create.component.css'
})
export class CategoryCreateComponent implements OnInit{

  constructor(
    private categoryService: CategoryService,
    private toast : ToastService
  ) { }

  ngOnInit() {
  }

  cancel() {
    this.visible = false;
  }

  saveCategory() {
    this.categoryService.save().subscribe({
      next: (value) => {
        this.items.push(value);
        this.item = new BookCategoryDto();
        this.visible = false;
        this.toast.showTopRight('Category created successfully');
      },
      error: (err) => {
        console.error(err);
        this.item = new BookCategoryDto();
        this.visible = false;
        this.toast.showTopRight('Error creating category');
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

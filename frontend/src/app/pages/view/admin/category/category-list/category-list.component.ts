import {Component, OnInit} from '@angular/core';
import {CategoryService} from "../../../../../shared/service/category.service";
import {BookCategoryDto} from "../../../../../shared/models/book-category-dto";
import {ToastService} from "../../../../../shared/service/toast.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit{

  constructor(
    private categoryService: CategoryService,
    private toast: ToastService
  ) {
  }

  page: number = 1;
  itemsPerPage: number = 7;

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

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (value.trim()) {
      this.findByName(value);
    } else {
      this.findAll();
    }
  }

  findByName(name: string){
    this.categoryService.findByName(name).subscribe({
      next: (category) => {
        this.items = category;
      },
      error: (err) => {
        this.toast.show("Category not found")
      }
    })
  }

  deleteByRef(ref: string){
    this.categoryService.deleteByRef(ref).subscribe({
      next: (value) => {
        this.items = this.items.filter(item => item.ref !== ref);
        this.toast.show("Category deleted successfully")
      },
      error: (err) => {
        this.toast.show("Error deleting category")
      }
    })
  }

  openEdit(item: BookCategoryDto){
    this.item = item;
    this.editVisible = true;
  }

  get visible(): boolean {
    return this.categoryService.visible;
  }

  set visible(value: boolean) {
    this.categoryService.visible = value;
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

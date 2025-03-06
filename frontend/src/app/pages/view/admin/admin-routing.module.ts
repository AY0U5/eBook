import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BookListComponent} from "./book/book-list/book-list.component";
import {CategoryListComponent} from "./category/category-list/category-list.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'books', component: BookListComponent},
  {path: 'categories', component: CategoryListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

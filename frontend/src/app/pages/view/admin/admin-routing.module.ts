import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BookListComponent} from "./book/book-list/book-list.component";

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'books', component: BookListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "../../../components/components.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookListComponent } from './book/book-list/book-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BookListComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ]
})
export class AdminModule { }

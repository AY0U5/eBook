import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "../../../components/components.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookListComponent } from './book/book-list/book-list.component';
import {LucideAngularModule,BookPlus,Search}
  from "lucide-angular";
import { BookCreateComponent } from './book/book-create/book-create.component';
import {FormsModule} from "@angular/forms";
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryCreateComponent } from './category/category-create/category-create.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BookListComponent,
    BookCreateComponent,
    CategoryListComponent,
    CategoryCreateComponent,
    CategoryEditComponent,
    BookEditComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LucideAngularModule.pick({BookPlus, Search}),
    FormsModule
  ]
})
export class AdminModule { }

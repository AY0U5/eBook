import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ComponentsModule} from "../../../components/components.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookListComponent } from './book/book-list/book-list.component';
import {LucideAngularModule,BookPlus,Search}
  from "lucide-angular";
import { BookCreateComponent } from './book/book-create/book-create.component';



@NgModule({
  declarations: [
    DashboardComponent,
    BookListComponent,
    BookCreateComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    LucideAngularModule.pick({BookPlus,Search})
  ]
})
export class AdminModule { }

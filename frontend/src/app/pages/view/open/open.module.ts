import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ComponentsModule} from "../../../components/components.module";
import {RouterLink} from "@angular/router";
import {LucideAngularModule,Search} from "lucide-angular";
import {BooksModule} from "./books/books.module";



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterLink,
    LucideAngularModule.pick({Search}),
    BooksModule
  ]
})
export class OpenModule { }

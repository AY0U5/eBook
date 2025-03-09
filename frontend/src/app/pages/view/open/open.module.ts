import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {ComponentsModule} from "../../../components/components.module";
import { BooksComponent } from './books/books.component';
import {RouterLink} from "@angular/router";
import {LucideAngularModule,Search} from "lucide-angular";



@NgModule({
  declarations: [
    HomeComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterLink,
    LucideAngularModule.pick({Search})
  ]
})
export class OpenModule { }

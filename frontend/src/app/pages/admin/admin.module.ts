import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AppModule} from "../../app.module";
import {SidebarComponent} from "../../components/sidebar/sidebar.component";
import {ShareModule} from "../../components/share.module";



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ShareModule
  ]
})
export class AdminModule { }

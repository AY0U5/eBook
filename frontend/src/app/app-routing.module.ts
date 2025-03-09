import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/view/open/home/home.component";
import {BooksComponent} from "./pages/view/open/books/books.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'books', component: BooksComponent},
  {path: 'admin', loadChildren: () => import('../app/pages/view/admin/admin-routing.module').then(m => m.AppRoutingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/view/open/home/home.component";
import {BooksComponent} from "./pages/view/open/books/books-list/books.component";
import {AuthGuard} from "./shared/guard/guard.guard";
import {OpenRoutingModule} from "./pages/view/open/open-routing.module";
import {AdminRoutingModule} from "./pages/view/admin/admin-routing.module";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {
    path:'books',
    loadChildren: () => import('../app/pages/view/open/open-routing.module').then(m => m.OpenRoutingModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/pages/view/admin/admin-routing.module').then(m => m.AdminRoutingModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

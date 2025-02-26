import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'sign-in',component:LoginPageComponent},
  {path: 'sign-up',component:SignUpPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

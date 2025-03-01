import { NgModule } from '@angular/core';
import {BrowserModule, provideClientHydration} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {interceptorService} from "./shared/interceptor/interceptor.interceptor";
import {provideToastr} from "ngx-toastr";
import {BrowserAnimationsModule, provideAnimations} from "@angular/platform-browser/animations";
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import {FormsModule} from "@angular/forms";
import {AdminModule} from "./pages/admin/admin.module";
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {ShareModule} from "./components/share.module";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginPageComponent,
    SignUpPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ShareModule
  ],
  providers: [
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: interceptorService,
      multi: true
    },
    provideToastr(),
    provideAnimations()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

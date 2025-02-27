import { Component } from '@angular/core';
import {UserService} from "../../shared/service/user.service";
import {UserDto} from "../../shared/models/user-dto";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(
    private service: UserService,
    private toast: ToastrService,
    private router: Router
  ) {
  }

  public register(){
    this.service.register().subscribe({
      next: (result) => {
        this.toast.success("User registered successfully", "Success",{
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
          closeButton: true,
        });
      },
      error: (error) => {
        console.log(error);
        this.toast.error("User registration failed", "Error");
      }
    });
  }

  public login(){
    this.service.login().subscribe({
      next: (result) => {
        localStorage.setItem("token", result.token);
        this.toast.success("User logged in successfully", "Success",{
          timeOut: 3000,
          progressBar: true,
          progressAnimation: 'increasing',
          positionClass: 'toast-top-right',
          closeButton: true,
        });
      },
      error: (error) => {
        console.log(error);
        this.toast.error("User login failed", "Error");
      }
    });
  }

  get request() {
    return this.service.request;
  }

  set request(value: { email: string; password: string }) {
    this.service.request = value;
  }

  get item(): UserDto {
    return this.service.item;
  }

  set item(value: UserDto) {
    this.service.item = value;
  }

  get items(): Array<UserDto> {
    return this.service.items;
  }

  set items(value: Array<UserDto>) {
    this.service.items = value;
  }

  routeToSignUp() {
    this.router.navigate(['sign-up'])
  }
}

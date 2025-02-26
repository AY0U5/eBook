import { Component } from '@angular/core';
import {UserService} from "../../shared/service/user.service";
import {ToastrService} from "ngx-toastr";
import {UserDto} from "../../shared/models/user-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {

  constructor(
    private service: UserService,
    private toast: ToastrService,
    private router : Router
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

  routeToSignIn() {
    this.router.navigate(['sign-in'])
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
}

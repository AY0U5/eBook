import { Component } from '@angular/core';
import {AuthService} from "../../shared/service/auth/auth.service";
import {UserDto} from "../../shared/models/user-dto";
import {ToastService} from "../../shared/service/toast.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  authRequest:{email:string,password:string}

  constructor(
    private service: AuthService,
    private toast: ToastService
  ) {
  }

  login(){
    this.service.login(this.authRequest).subscribe({
      next:(data)=>{
        this.toast.showTopRight("Sign in successfully")
        localStorage.setItem("token",data.token)
      },
      error:()=>{
        this.toast.showTopRight("Error ,try later")
      }
    })
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

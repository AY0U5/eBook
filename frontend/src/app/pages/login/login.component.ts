import { Component } from '@angular/core';
import {AuthService} from "../../shared/service/auth/auth.service";
import {ToastService} from "../../shared/service/toast.service";
import {AuthDto} from "../../shared/models/auth-dto";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(
    private service: AuthService,
    private toast: ToastService
  ) {
  }

  login(){
    this.service.login().subscribe({
      next:(data)=>{
        this.toast.showTopRight("Sign in successfully")
        localStorage.setItem("token",data.token)
      },
      error:()=>{
        this.toast.showTopRight("Error ,try later")
      }
    })
  }

  get request(): AuthDto {
    return this.service.request;
  }

  set request(value: AuthDto) {
    this.service.request = value;
  }
}

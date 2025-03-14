import { Component } from '@angular/core';
import {AuthService} from "../../shared/service/auth/auth.service";
import {ToastService} from "../../shared/service/toast.service";
import {UserDto} from "../../shared/models/user-dto";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(
    private service: AuthService,
    private toast: ToastService
  ) {
  }

  register(){
    this.service.register().subscribe({
      next:(data)=>{
        this.toast.showTopRight(data.firstName +" "+ data.lastName+" Registered")
      },
      error:(err)=>{
        this.toast.showTopRight("Error!!!")
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

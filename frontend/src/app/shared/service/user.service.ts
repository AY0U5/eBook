import { Injectable } from '@angular/core';
import {UserDto} from "../models/user-dto";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";
import {Observable} from "rxjs";
import {TokenDto} from "../models/token-dto";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _item : UserDto = new UserDto();
  private _items : Array<UserDto> = new Array<UserDto>;
  private _request = {email: "", password: ""};

  constructor(
    private http: HttpClient
  ) { }

  public register():Observable<UserDto>{
    return this.http.post<UserDto>(this.API + "register", this.item);
  }

  public login():Observable<TokenDto>{
    return this.http.post<TokenDto>(this.API + "authenticate", this._request);
  }

  get API(){
    return environment.api + "auth/"
  }


  get item(): UserDto {
    if (this._item == null) {
      this._item = new UserDto();
    }
    return this._item;
  }

  set item(value: UserDto) {
    this._item = value;
  }

  get items(): Array<UserDto> {
    if (this._items == null) {
      this._items = new Array<UserDto>;
    }
    return this._items;
  }

  set items(value: Array<UserDto>) {
    this._items = value;
  }


  get request() {
    return this._request;
  }

  set request(value: { email: string; password: string }) {
    this._request = value;
  }
}

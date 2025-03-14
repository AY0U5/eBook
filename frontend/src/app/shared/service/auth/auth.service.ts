import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environment/environment";
import {UserDto} from "../../models/user-dto";
import {TokenDto} from "../../models/token-dto";
import {AuthDto} from "../../models/auth-dto";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _item: UserDto = new UserDto();
  private _items: Array<UserDto> = new Array<UserDto>();
  private _request : AuthDto = new AuthDto();

  constructor(private http: HttpClient) {
  }

  public register(): Observable<UserDto> {
    return this.http.post<UserDto>(this.API + "register", this.item)
  }

  public login(): Observable<TokenDto> {
    return this.http.post<TokenDto>(this.API + "authenticate", this.request)
  }

  get API() {
    return environment.BACK_API + "auth/";
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
      this._items = new Array<UserDto>();
    }
    return this._items;
  }

  set items(value: Array<UserDto>) {
    this._items = value;
  }


  get request(): AuthDto {
    if (this._request == null) {
      this._request = new AuthDto();
    }
    return this._request;
  }

  set request(value: AuthDto) {
    this._request = value;
  }
}

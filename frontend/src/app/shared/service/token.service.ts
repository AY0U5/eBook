import { Injectable } from '@angular/core';
import {TokenDto} from "../models/token-dto";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private _item: TokenDto = new TokenDto();
  private _items: Array<TokenDto> = new Array<TokenDto>;

  constructor() { }

  get token(){
    if (typeof window !== 'undefined') {
      return localStorage.getItem('token');
    }
    return null;
  }


  get item(): TokenDto {
    return this._item;
  }

  set item(value: TokenDto) {
    this._item = value;
  }

  get items(): Array<TokenDto> {
    return this._items;
  }

  set items(value: Array<TokenDto>) {
    this._items = value;
  }
}

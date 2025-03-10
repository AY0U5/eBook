import { Injectable } from '@angular/core';
import {BookDto} from "../../models/book-dto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environment/environment";
import {CartDto} from "../../models/cart-dto";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _item :CartDto = new CartDto();
  private _items :Array<CartDto> = new Array<CartDto>();
  private _cartVisible: boolean = false;

  constructor(private http : HttpClient) { }

  public findLastCart():Observable<CartDto>{
    return this.http.get<CartDto>(this.API);
  }

  public addToCart(book:BookDto):Observable<CartDto>{
    return this.http.put<CartDto>(this.API +"book",book);
  }

  get API(){
    return environment.BACK_API + "open/carts/";
  }

  get cartVisible(): boolean {
    return this._cartVisible;
  }

  set cartVisible(value: boolean) {
    this._cartVisible = value;
  }

  get item(): CartDto {
    if (this._item == null) {
      this._item = new CartDto();
    }
    return this._item;
  }

  set item(value: CartDto) {
    this._item = value;
  }

  get items(): Array<CartDto> {
    if (this._items == null) {
      this._items = new Array<CartDto>();
    }
    return this._items;
  }

  set items(value: Array<CartDto>) {
    this._items = value;
  }
}

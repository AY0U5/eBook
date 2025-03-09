import { Injectable } from '@angular/core';
import {BookDto} from "../../models/book-dto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class OpenBookService {

  private _item :BookDto = new BookDto();
  private _items :Array<BookDto> = new Array<BookDto>();

  constructor(private http : HttpClient) { }

  public findAll():Observable<Array<BookDto>>{
    return this.http.get<Array<BookDto>>(this.API);
  }

  get API(){
    return environment.BACK_API + "open/books/";
  }

  get item(): BookDto {
    if (this._item == null) {
      this._item = new BookDto();
    }
    return this._item;
  }

  set item(value: BookDto) {
    this._item = value;
  }

  get items(): Array<BookDto> {
    if (this._items == null) {
      this._items = new Array<BookDto>();
    }
    return this._items;
  }

  set items(value: Array<BookDto>) {
    this._items = value;
  }
}

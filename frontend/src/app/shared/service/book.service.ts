import { Injectable } from '@angular/core';
import {BookDto} from "../models/book-dto";
import {environment} from "../../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private _item :BookDto = new BookDto();
  private _items :Array<BookDto> = new Array<BookDto>();
  private _visible: boolean = false;
  private _editVisible: boolean = false;

  constructor(private http : HttpClient) { }

  public create(selectedFile: File):Observable<BookDto>{
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('item', JSON.stringify(this.item));
    return this.http.post<BookDto>(this.API + "register", formData);
  }

  public findAll():Observable<Array<BookDto>>{
    return this.http.get<Array<BookDto>>(this.API);
  }

  public deleteByRef(ref:string):Observable<number>{
    return this.http.delete<number>(this.API + "ref/" + ref);
  }

  public edit(selectedFile: File):Observable<BookDto>{
    const formData = new FormData();
    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    formData.append('item', JSON.stringify(this.item));
    return this.http.put<BookDto>(this.API + "edit", formData);
  }

  get API(){
    return environment.BACK_API + "admin/books/";
  }

  get visible(): boolean {
    return this._visible;
  }

  set visible(value: boolean) {
    this._visible = value;
  }

  get editVisible(): boolean {
    return this._editVisible;
  }

  set editVisible(value: boolean) {
    this._editVisible = value;
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

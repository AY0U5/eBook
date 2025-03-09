import { Injectable } from '@angular/core';
import {BookCategoryDto} from "../../models/book-category-dto";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private _item : BookCategoryDto = new BookCategoryDto();
  private _items : Array<BookCategoryDto> = new Array<BookCategoryDto>();
  private _visible: boolean = false;
  private _editVisible: boolean = false;

  constructor(
    private http: HttpClient
  ) { }

  public save():Observable<BookCategoryDto>{
    return this.http.post<BookCategoryDto>(this.API + "register",this.item)
  }

  public findAll():Observable<Array<BookCategoryDto>>{
    return this.http.get<Array<BookCategoryDto>>(this.API)
  }

  public deleteByRef(ref:string):Observable<number>{
    return this.http.delete<number>(this.API + "ref/" + ref)
  }

  public edit():Observable<BookCategoryDto>{
    return this.http.put<BookCategoryDto>(this.API +"edit",this.item)
  }

  public findByName(name:string):Observable<Array<BookCategoryDto>>{
    return this.http.get<Array<BookCategoryDto>>(this.API + "name/" + name)
  }

  get API(){
    return environment.BACK_API + 'admin/book-categories/';
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

  get item(): BookCategoryDto {
    if (this._item == null){
      this._item = new BookCategoryDto();
    }
    return this._item;
  }

  set item(value: BookCategoryDto) {
    this._item = value;
  }

  get items(): Array<BookCategoryDto> {
    if (this._items == null){
      this._items = new Array<BookCategoryDto>();
    }
    return this._items;
  }

  set items(value: Array<BookCategoryDto>) {
    this._items = value;
  }
}

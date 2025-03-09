import { Injectable } from '@angular/core';
import {BookDto} from "../../models/book-dto";
import {environment} from "../../../../environment/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cartVisible: boolean = false;

  constructor() {
  }

  get cartVisible(): boolean {
    return this._cartVisible;
  }

  set cartVisible(value: boolean) {
    this._cartVisible = value;
  }
}

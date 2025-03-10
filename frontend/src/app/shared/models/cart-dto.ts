import {BaseDto} from "./base-dto";
import {BookDto} from "./book-dto";

export class CartDto extends BaseDto{
  ref: string;
  quantity: number;
  books: Array<BookDto>

  constructor() {
    super();
    this.ref = "";
    this.books = new Array<BookDto>();
  }
}

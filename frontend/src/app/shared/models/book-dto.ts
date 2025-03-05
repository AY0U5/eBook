import {AuthorDto} from "./author-dto";
import {BookCategoryDto} from "./book-category-dto";
import {BaseDto} from "./base-dto";

export class BookDto extends BaseDto{

  title: string;
  ref: string;
  description: string
  price: number;
  /*author: AuthorDto
  category: BookCategoryDto*/

  constructor() {
    super();
    this.title = '';
    this.ref = '';
    this.description = '';
    this.price = 0;
    /*this.author = new AuthorDto();
    this.category = new BookCategoryDto();*/
  }
}

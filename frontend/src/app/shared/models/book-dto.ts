import {BaseDto} from "./base-dto";
import {BookCategoryDto} from "./book-category-dto";

export class BookDto extends BaseDto{

  title: string;
  ref: string;
  description: string
  pictureName: string
  price: number;
  author: string
  category: BookCategoryDto

  constructor() {
    super();
    this.title = '';
    this.ref = '';
    this.description = '';
    this.pictureName = '';
    this.author = '';
    this.category = new BookCategoryDto();
  }
}

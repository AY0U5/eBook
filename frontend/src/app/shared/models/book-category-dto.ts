import {BaseDto} from "./base-dto";

export class BookCategoryDto extends BaseDto{

  name: string;
  description: string;
  ref: string;

  constructor() {
    super();
    this.name = '';
    this.description = '';
    this.ref = '';
  }
}

import {UserDto} from "./user-dto";

export class AuthorDto extends UserDto{

  bio: string;
  dateOfBirth: Date;
  nationality: string;

  constructor() {
    super();
    this.bio = '';
    this.dateOfBirth = new Date();
    this.nationality = '';
  }
}

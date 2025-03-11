import {BaseDto} from "./base-dto";
import {UserDto} from "./user-dto";

export class TokenDto extends BaseDto{

  token: string;
  expiredAt: Date;
  createdAt: Date;
  user: UserDto;


  constructor() {
    super();
    this.token = '';
    this.user = new UserDto();
  }
}

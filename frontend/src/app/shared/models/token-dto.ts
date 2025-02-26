import {UserDto} from "./user-dto";

export class TokenDto {
  id?: number;
  token: string;
  expiredAt: Date;
  createdAt: Date;
  user: UserDto;

  constructor() {
    this.token = "";
    this.expiredAt = new Date();
    this.createdAt = new Date();
    this.user = new UserDto();
  }
}

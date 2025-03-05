import {BaseDto} from "./base-dto";

export class UserDto extends BaseDto{

  firstName: string;
  lastName: string;
  provider: string;
  providerId: string;
  password: string;
  username: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;

  constructor() {
    super();
    this.firstName = '';
    this.lastName = '';
    this.provider = '';
    this.providerId = '';
    this.password = '';
    this.username = '';
    this.accountNonExpired = false;
    this.accountNonLocked = false;
    this.credentialsNonExpired = false;
    this.enabled = false;
  }
}

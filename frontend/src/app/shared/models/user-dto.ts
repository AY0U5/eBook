import {RoleDto} from "./role-dto";

export class UserDto {
  id?: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  credentialsNonExpired: boolean;
  enabled: boolean;
  roles: Array<RoleDto>


  constructor() {
    this.username = "";
    this.password = "";
    this.firstName = "";
    this.lastName = "";
    this.accountNonExpired = true;
    this.accountNonLocked = true;
    this.credentialsNonExpired = true;
    this.enabled = true;
    this.roles = new Array<RoleDto>();
  }
}

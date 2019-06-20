import UserDTO from './UserDTO';

export default class SessionDTO {

  id: number;
  fullName: string;
  role: string;

  constructor(public user: UserDTO, public token: string) {
    this.id = user.id;
    this.fullName = `${user.person.names} ${user.person.firstSurname}`;
    this.role = user.role.name;
  }
}

import UserDTO from './UserDTO';

export default class SessionDTO {

  constructor(public user: UserDTO, public token: string) {}
}

import { IQuery, IQueryHandler } from './base/IQuery';
import UserDTO from '../DTOs/UserDTO';
import SessionDTO from '../DTOs/SessionDTO';
import jsonwebtoken from 'jsonwebtoken';

export default interface GetUserSessionQuery extends IQuery {
  user: UserDTO;
}

export class GetUserSessionQueryHandler implements IQueryHandler<SessionDTO> {
  async handle(query: GetUserSessionQuery): Promise<SessionDTO> {
    const strUser = JSON.parse(JSON.stringify(query.user));
    // const tokenData = TokenData
    const token = jsonwebtoken.sign(strUser, process.env.TOKEN_SECRET);
    return new SessionDTO(query.user, token);
  }

}

import { IQuery, IQueryHandler } from './base/IQuery';
import IUserRepository from '../../data/repository/UserRepository/IUserRepository';
import UserDTO from '../DTOs/UserDTO';

export default interface GetUserLoginQuery extends IQuery {
  username: string;
}

export class GetUserLoginQueryHandler implements IQueryHandler<UserDTO> {
  constructor(protected userRepository: IUserRepository) {}

  async handle(query: GetUserLoginQuery): Promise<UserDTO> {
    const user = await this.userRepository.getOneByQuery({ username: query.username });
    return new UserDTO(user);
  }
}

import { IQuery, IQueryHandler } from './base/IQuery';
import IUserRepository from '../../data/repository/UserRepository/IUserRepository';
import UserDTO from '../DTOs/UserDTO';
import UserRepository from '../../data/repository/UserRepository/UserRepository';

export default interface GetUserLoginQuery extends IQuery {
  username: string;
}

export class GetUserLoginQueryHandler implements IQueryHandler<UserDTO> {
  constructor(protected userRepository: UserRepository) {}

  async handle(query: GetUserLoginQuery): Promise<UserDTO> {
    const user = await this.userRepository.findOne(query);
    return new UserDTO(user);
  }
}

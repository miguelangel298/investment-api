import { IQuery, IQueryHandler } from './base/IQuery';
import UserDTO from '../DTOs/UserDTO';
import IUserRepository from '../../data/repository/UserRepository/IUserRepository';

export default interface GetValidateUserLoginQuery extends IQuery {
  username: string;
  password: string;
}

export class GetValidateUserLoginQueryHandler implements IQueryHandler<UserDTO> {
  constructor(protected userRepository: IUserRepository) { }

  async handle(query: GetValidateUserLoginQuery): Promise<UserDTO> {
    const user = await this.userRepository.getOneByQuery({ username: query.username });
    if (user) {
      const validPassword = await user.comparePassword(query.password);
      if (validPassword) {
        return new UserDTO(user);
      }
      throw new Error('Password not match ');
    }
    throw new Error('User does not exist');
  }

}

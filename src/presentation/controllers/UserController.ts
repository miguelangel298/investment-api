import UserDTO from '../../domain/DTOs/UserDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import GetUserLoginQuery,
{ GetUserLoginQueryHandler } from '../../domain/queries/GetUserLoginQuery';
import IUserRepository from '../../data/repository/UserRepository/IUserRepository';

export default class UserController {
  constructor(protected userRepository: IUserRepository) {}

  async show(query: GetUserLoginQuery): Promise<UserDTO> {
    try {
      const getUserLoginQueryHandler =
        new GetUserLoginQueryHandler(this.userRepository);

      return await getUserLoginQueryHandler.handle(query);
    } catch (e) {
      throw buildRawError(e);
    }
  }
}

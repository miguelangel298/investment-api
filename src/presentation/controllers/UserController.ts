import UserDTO from '../../domain/DTOs/UserDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import GetUserLoginQuery,
{ GetUserLoginQueryHandler } from '../../domain/queries/GetUserLoginQuery';
import UserRepository from '../../data/repository/UserRepository/UserRepository';

export default class UserController {
  constructor(protected userRepository: UserRepository) {}

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
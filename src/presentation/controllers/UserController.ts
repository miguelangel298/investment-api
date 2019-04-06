import UserDTO from '../../domain/DTOs/UserDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import GetUserLoginQuery,
{ GetUserLoginQueryHandler } from '../../domain/queries/GetUserLoginQuery';
import QueryModule from '../../application/modules/QueryModule';
import UserRepository from '../../data/repository/UserRepository/UserRepository';

export default class UserController {
  constructor(protected userRepository: UserRepository) {}
  async show(user: GetUserLoginQuery): Promise<UserDTO> {
    try {
      // const getUserLoginQueryHandler =
      //   new GetUserLoginQueryHandler(this.userRepository);

      return await QueryModule.getUserLoginQueryHandle().handle(user);
    } catch (e) {
      throw buildRawError(e);
    }
  }
}

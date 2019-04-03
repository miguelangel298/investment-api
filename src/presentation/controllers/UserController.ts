import UserDTO from '../../domain/DTOs/UserDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import GetUserLoginQuery from '../../domain/queries/GetUserLoginQuery';
import QueryModule from '../../application/modules/QueryModule';

export default class UserController {
  async show(user: GetUserLoginQuery): Promise<UserDTO> {
    try {
      return await QueryModule.getUserLoginQueryHandle().handle(user);
    } catch (e) {
      throw buildRawError(e);
    }
  }
}

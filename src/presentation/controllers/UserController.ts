import UserDTO from '../../domain/DTOs/UserDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import GetUserLoginQuery,
{ GetUserLoginQueryHandler } from '../../domain/queries/GetUserLoginQuery';
import IUserRepository from '../../data/repository/UserRepository/IUserRepository';
import CreateUserCommand, { CreateUserCommandHandle } from '../../domain/command/CreateUserCommand';

export default class UserController {
  constructor(protected userRepository: IUserRepository) {}

  async create(command: CreateUserCommand): Promise<UserDTO> {
    try {
      const createUserCommandHandle =
        new CreateUserCommandHandle(this.userRepository);
      const getUserLoginQueryHandler =
        new GetUserLoginQueryHandler(this.userRepository);

      await createUserCommandHandle.handle(command);

      const user: GetUserLoginQuery = {
        username: command.username,
      };

      return await getUserLoginQueryHandler.handle(user);
    } catch (e) {
      throw buildRawError(e);
    }
  }

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

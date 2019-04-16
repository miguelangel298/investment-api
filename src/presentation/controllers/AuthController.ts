import IUserRepository from '../../data/repository/UserRepository/IUserRepository';
import SessionDTO from '../../domain/DTOs/SessionDTO';
import GetValidateUserLoginQuery,
{ GetValidateUserLoginQueryHandler } from '../../domain/queries/GetValidateUserLoginQuery';
import GetUserSessionQuery,
{ GetUserSessionQueryHandler } from '../../domain/queries/GetUserSessionQuery';
import { buildRawError } from '../../application/config/ErrorCode';

export interface ILoginUser {
  username: string;
  password: string;
}

export default class AuthController {
  constructor(protected userRepository: IUserRepository) { }

  async login(userValidate: ILoginUser): Promise<SessionDTO> {
    try {
      const query: GetValidateUserLoginQuery = userValidate;
      const getValidateUserLoginQuery = new GetValidateUserLoginQueryHandler(this.userRepository);
      const user = await getValidateUserLoginQuery.handle(query);
      if (user) {
        const querySession: GetUserSessionQuery = { user };
        const getUserSessionQueryHandler = new GetUserSessionQueryHandler();
        return await getUserSessionQueryHandler.handle(querySession);
      }
    } catch (e) {
      throw buildRawError(e);
    }

  }

}

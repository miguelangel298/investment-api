import IUserRepository from '../../data/repository/UserRepository/IUserRepository';
import GetValidateUserLoginQuery,
{ GetValidateUserLoginQueryHandler } from '../../domain/queries/GetValidateUserLoginQuery';
import { buildRawError } from '../../application/config/ErrorCode';
import { AuthUser, TokenData } from '../../application/config/TokenConfig';
import { TokenService } from '../../application/util/TokenService';
import getPermissions from '../../application/util/getPermissions';

export interface ILoginUser {
  username: string;
  password: string;
}

export default class AuthController {
  constructor(protected userRepository: IUserRepository) { }

  /**
   * Verification of access, validate that the user has provided
   * valid credentials and that he has valid permits.
   * @param userValidate
   * @returns { TokenData }
   */
  async login(userValidate: ILoginUser): Promise<TokenData> {
    try {
      const query: GetValidateUserLoginQuery = userValidate;
      const getValidateUserLoginQuery = new GetValidateUserLoginQueryHandler(this.userRepository);
      const user = await getValidateUserLoginQuery.handle(query);
      if (user) {
        const authUser: AuthUser = {
          id: user.id,
          fullName: `${user.person.names} ${user.person.firstSurname} ${user.person.secondSurname}`,
          person: { id:user.person.id },
          role:  user.role.name,
          permission: getPermissions(user),
        };

        return TokenService.createToken(authUser, process.env.SECRET_KEY,
                                        process.env.TOKEN_EXPIRESIN);
      }
    } catch (e) {
      throw buildRawError(e);
    }

  }

}

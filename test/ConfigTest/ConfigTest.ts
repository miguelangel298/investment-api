import dotenv from 'dotenv';
import { AuthUser, TokenData } from '../../src/application/config/TokenConfig';
import UserDTO from '../../src/domain/DTOs/UserDTO';
import UserRepository from '../../src/data/repository/UserRepository/UserRepository';
import DatabaseConnection from '../../src/data/DatabaseConnection';
import { getCustomRepository } from 'typeorm';
import { GetUserLoginQueryHandler } from '../../src/domain/queries/GetUserLoginQuery';
import getPermissions from '../../src/application/util/getPermissions';
import { TokenService } from '../../src/application/util/TokenService';
dotenv.config();

export default class ConfigTest {

  static async getUserAdmin() {
    let user : UserDTO;
    let userRepository: UserRepository;

    await DatabaseConnection.connect();
    userRepository = getCustomRepository(UserRepository);
    const queryHandler = new GetUserLoginQueryHandler(userRepository);
    user = await queryHandler.handle({ username: 'admin' });

    const authUser: AuthUser = {
      id: user.id,
      role: user.role.name,
      fullName: `${user.person.names} ${user.person.firstSurname} ${user.person.secondSurname}`,
      person: { id:user.person.id },
      permission: getPermissions(user),
    };
    return TokenService.createToken(authUser,
                                    process.env.SECRET_KEY,
                                    process.env.TOKEN_EXPIRESIN);
  }
}

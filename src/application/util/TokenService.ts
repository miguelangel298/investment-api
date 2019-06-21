import * as jwt from 'jsonwebtoken';
import { AuthUser, DataStoredInToken, TokenData } from '../config/TokenConfig';
import { buildRawError, httpCodes } from '../config/ErrorCode';

interface DataParams {
  user:AuthUser;
  token: string;
}
interface DataRefreshTokenParams {
  id: number;
}

/**
 * This class contain the logic for decode access token and refresh token
 */
export class TokenService {

  /**
   * This function create the token access, refresh token and, expiresIn.
   * @param user
   * @param SECRET_KEY
   * @param TOKEN_EXPIRED
   */
  static createToken = (user: AuthUser,
                        SECRET_KEY: string,
                        TOKEN_EXPIRED: string): TokenData => {
    const dataStoredInToken: DataStoredInToken = {
      user: JSON.parse(JSON.stringify(user)),
    };
    if (!user.permission || user.permission.length === 0) {
      throw buildRawError({ message: 'you don\'t have permission' , code: httpCodes.UNAUTHORIZED });
    }

    return {
      user,
      expiresIn:process.env.TOKEN_EXPIRESIN,
      token: jwt.sign(dataStoredInToken,
                      SECRET_KEY,
                      { expiresIn: parseInt(TOKEN_EXPIRED, 10) }),
      refreshToken: jwt.sign({ id:dataStoredInToken.user.id },
                             SECRET_KEY)};
  }

  /**
   * This method decode the access token or generate exception if fail
   * @param authorization
   */
  static async decode(authorization: string): Promise <DataParams | any > {
    return new Promise((resolve, reject) => {
      try {
        let token = authorization;
        console.log('klk pp esta llegando')
        if (token !== undefined) {
          token = token.split(' ')[1];
        }

        const dataStored = jwt.verify(token, process.env.SECRET_KEY) as DataStoredInToken;

        const data: DataParams = {
          token,
          user: dataStored.user,
        };
        resolve(data);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * This method decode the refresh token or generate exception if fail
   * @param refreshToken
   */
  static async decodeRefreshToken(refreshToken: string): Promise <DataRefreshTokenParams | any > {
    return new Promise((resolve, reject) => {
      try {
        const dataStored = jwt.verify(refreshToken,
                                      process.env.SECRET_KEY) as DataRefreshTokenParams;
        if (!dataStored.hasOwnProperty('id')) {
          reject(buildRawError({ code:httpCodes.UNAUTHORIZED,
            message:'Token is invalid' }));
        }
        resolve(dataStored);
      } catch (error) {
        reject(error);
      }
    });
  }
}

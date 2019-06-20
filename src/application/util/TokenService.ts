import * as jwt from 'jsonwebtoken';
import { DataStoredInToken } from './DataStoredInToken';
import { AuthUser } from './AuthUser';
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
   * This method decode the access token or generate exception if fail
   * @param authorization
   */
  static async decode(authorization: string): Promise <DataParams | any > {
    return new Promise((resolve, reject) => {
      try {
        let token = authorization;
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

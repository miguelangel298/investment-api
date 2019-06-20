import * as jwt from 'jsonwebtoken';
import { buildRawError, httpCodes } from './ErrorCode';

// These are the data that the token will keep
export interface AuthUser {
  id?: number;
  fullName?: string;
  permission?: string[];
  role?: string;
  email?: string;
  person?:{ id: number };
}

export interface DataStoredInToken {
  user: AuthUser;
}

// Structure of response in creation new token
export interface TokenData {
  token: any;
  expiresIn?: string;
  refreshToken?: string;
}

/**
 * This function create the token access, refresh token and, expiresIn.
 * @param user
 * @param SECRET_KEY
 * @param TOKEN_EXPIRED
 */
export const createToken = (user: AuthUser,
                            SECRET_KEY: string,
                            TOKEN_EXPIRED: string): TokenData => {
  const dataStoredInToken: DataStoredInToken = {
    user: JSON.parse(JSON.stringify(user)),
  };
  if (!user.permission || user.permission.length === 0) {
    throw buildRawError({ message: 'you don\'t have permission' , code: httpCodes.UNAUTHORIZED });
  }

  return {
    expiresIn:process.env.TOKEN_EXPIRESIN,
    token: jwt.sign(dataStoredInToken,
                    SECRET_KEY,
                    { expiresIn: parseInt(TOKEN_EXPIRED, 10) }),
    refreshToken: jwt.sign({ id:dataStoredInToken.user.id },
                           SECRET_KEY)};
};

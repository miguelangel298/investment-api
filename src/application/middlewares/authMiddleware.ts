import { NextFunction, Response } from 'express';
import ResponseHandler from '../util/ResponseHandler';
import { buildRawError, httpCodes } from '../config/ErrorCode';
import { TokenService } from '../util/TokenService';
import { RequestWithUser } from '../util/RequestWithUser';

/**
 * This function is a middleware for authenticating users and
 * add data store in the token in the request
 */
export const authMiddleware = () => async (
  request: RequestWithUser,
  response: Response,
  next: NextFunction) => {
  try {
    const data = await TokenService.decode(request.headers.authorization);
    if (!data.user) {
      ResponseHandler.sendError(response, buildRawError(buildRawError({ code:httpCodes.UNAUTHORIZED,
        message:'Token is invalid' })));
    }
    request.token = data.token;
    request.user = data.user;
    next();
  } catch (e) {
    ResponseHandler.sendError(response, buildRawError(e));
  }
};

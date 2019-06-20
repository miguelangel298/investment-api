import { RequestWithUser } from '../util/RequestWithUser';
import { NextFunction, Response } from 'express';
import ResponseHandler from '../util/ResponseHandler';
import { buildRawError, httpCodes } from '../config/ErrorCode';

/**
 * This method check if a permission
 * is contained in the request or generate exception of UNAUTHORIZED
 * @param permission
 */
export const authorizationMiddleware = (permission:string) => (
  request: RequestWithUser,
  response: Response,
  next: NextFunction,
) => {
  let valid: string;
  valid = request.user.permission.find(userPermission => userPermission === permission);
  if (valid) {
    next();
  }
  if (!valid) {
    ResponseHandler.sendError(response,
                              buildRawError({ code:httpCodes.UNAUTHORIZED,
                                message:'You don\'t have permission' }));
  }

};

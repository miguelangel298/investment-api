import { NextFunction, Response } from 'express';
import ResponseHandler from '../util/ResponseHandler';
import { buildRawError, httpCodes } from '../config/ErrorCode';
import { RequestWithUser } from '../util/RequestWithUser';

export const adminMiddleware = () => (
      request: RequestWithUser,
      response: Response,
      next: NextFunction,
    ) => {
  switch (request.user.role) {
    case 'Administrativo':
      next();
      break;
    default:
      ResponseHandler.sendError(response,
                                buildRawError({ code:httpCodes.UNAUTHORIZED,
                                  message:'You don\'t have permission' }));
      break;
  }

};

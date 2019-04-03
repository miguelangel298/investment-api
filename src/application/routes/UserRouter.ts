import BaseRouter from './base/BaseRouter';
import ResponseHandler from '../util/ResponseHandler';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import UserController from '../../presentation/controllers/UserController';
import { httpCodes } from '../config/ErrorCode';

export default class UserRouter extends BaseRouter {
  constructor(route: string, protected userController: UserController) {
    super(route, false);
  }

  addRoutes(): void {
    this.router.get('/', this.show());
  }

  show(): RequestHandler {
    return(req: Request, res: Response, next: NextFunction) => {
      this.userController.show(req.params)
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'users', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

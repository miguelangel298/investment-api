import BaseRouter from './base/BaseRouter';
import ResponseHandler from '../util/ResponseHandler';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import UserController from '../../presentation/controllers/UserController';
import { httpCodes } from '../config/ErrorCode';

export default class UserRouter extends BaseRouter {
  constructor(route: string, protected userController: UserController) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes(): void {
    this.router.get('/:username', this.show());
  }

  show(): RequestHandler {
    return(req: Request, res: Response, next: NextFunction) => {
      console.log(`This the params: ${req.params.username}`);
      this.userController.show(req.params.username)
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'users', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

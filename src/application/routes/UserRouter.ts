import BaseRouter from './base/BaseRouter';
import ResponseHandler from '../util/ResponseHandler';
import { NextFunction, Request, RequestHandler, Response } from 'express';
import UserController from '../../presentation/controllers/UserController';
import { httpCodes } from '../config/ErrorCode';
import GetUserLoginQuery from '../../domain/queries/GetUserLoginQuery';

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
      const query: GetUserLoginQuery = {
        username: req.params.username,
      };
      this.userController.show(query)
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'users', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

import BaseRouter from './base/BaseRouter';
import AuthController, { ILoginUser } from '../../presentation/controllers/AuthController';
import { RequestHandler, Request, Response } from 'express';
import ResponseHandler from '../util/ResponseHandler';
import { httpCodes } from '../config/ErrorCode';

export default class AuthRouter extends BaseRouter {
  constructor(route:string, protected authController: AuthController) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes(): void {
    this.router.post('/login', this.login());
  }

  login(): RequestHandler {
    return (req: Request, res: Response) => {
      const query: ILoginUser = {
        username: req.body.username,
        password: req.body.password,
      };
      this.authController.login(query)
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'session', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

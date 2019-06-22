import BaseRouter from './base/BaseRouter';
import { Request, RequestHandler, Response } from 'express';
import GenderController from '../../presentation/controllers/GenderController';
import ResponseHandler from '../util/ResponseHandler';
import { httpCodes } from '../config/ErrorCode';

export default class GenderRouter extends BaseRouter {

  constructor(route: string,
              protected genderController: GenderController,
              protected tokenMiddleware: RequestHandler) {
    super(route, false);
    this.addRoutes();
  }

  // Instantiate router to add new routes.
  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.get('/', this.index());
  }

  // Get genders list
  index(): RequestHandler {
    return(req: Request, res: Response) => {
      this.genderController.index()
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'genders', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

import BaseRouter from './base/BaseRouter';
import ProvinceController from '../../presentation/controllers/ProvinceController';
import { Request, RequestHandler, Response } from 'express';
import ResponseHandler from '../util/ResponseHandler';
import { httpCodes } from '../config/ErrorCode';

export default class ProvinceRouter extends BaseRouter {
  constructor(route: string,
              protected provinceController: ProvinceController,
              protected tokenMiddleware: RequestHandler) {
    super(route, false);
    this.addRoutes();
  }

  // Instantiate router to add new routes.
  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.get('/', this.index());
  }

  // Get provinces list
  index(): RequestHandler {
    return(req: Request, res: Response) => {
      this.provinceController.index()
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'provinces', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }

}

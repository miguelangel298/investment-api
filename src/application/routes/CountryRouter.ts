import BaseRouter from './base/BaseRouter';
import CountryController from '../../presentation/controllers/CountryController';
import { Request, RequestHandler, Response } from 'express';
import ResponseHandler from '../util/ResponseHandler';
import { httpCodes } from '../config/ErrorCode';

export default class CountryRouter extends BaseRouter {

  constructor(route: string,
              protected countryController: CountryController,
              protected tokenMiddleware: RequestHandler) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.get('/', this.index());
  }

  index(): RequestHandler {
    return(req: Request, res: Response) => {
      this.countryController.index()
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'countries', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

import MunicipalityController from '../../presentation/controllers/MunicipalityController';
import { Request, RequestHandler, Response } from 'express';
import BaseRouter from './base/BaseRouter';
import ResponseHandler from '../util/ResponseHandler';
import { httpCodes } from '../config/ErrorCode';

export default class MunicipalityRouter extends BaseRouter {
  constructor(route: string,
              protected municipalityController: MunicipalityController,
              protected tokenMiddleware: RequestHandler) {
    super(route, false);
    this.addRoutes();
  }

  // Instantiate router to add new routes.
  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.get('/', this.index());
  }

  // Get municipalities list
  index(): RequestHandler {
    return(req: Request, res: Response) => {
      this.municipalityController.index()
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK,
                                                       'municipalities', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

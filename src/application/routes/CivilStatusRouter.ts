import BaseRouter from './base/BaseRouter';
import { RequestHandler, Response, Request } from 'express';
import CivilStatusController from '../../presentation/controllers/CivilStatusController';
import ResponseHandler from '../util/ResponseHandler';
import { httpCodes } from '../config/ErrorCode';

export default class CivilStatusRouter extends BaseRouter {

  constructor(route: string,
              protected civilStatusController: CivilStatusController,
              protected tokenMiddleware: RequestHandler) {
    super(route, false);
    this.addRoutes();
  }

  // Instantiate router to add new routes.
  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.get('/', this.index());
  }

  // Get civil status list
  index(): RequestHandler {
    return (req: Request, res: Response) => {
      this.civilStatusController.index()
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'civil_status', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

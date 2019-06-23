import BaseRouter from './base/BaseRouter';
import BranchOfficeController from '../../presentation/controllers/BranchOfficeController';
import { RequestHandler, Request, Response } from 'express';
import ResponseHandler from '../util/ResponseHandler';
import { httpCodes } from '../config/ErrorCode';

export default class BranchOfficeRouter extends BaseRouter {

  constructor(route: string,
              protected branchOfficeController: BranchOfficeController,
              protected tokenMiddleware: RequestHandler) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.get('/', this.index());
  }

  // Get branch offices list
  index(): RequestHandler {
    return (req: Request, res: Response) => {
      this.branchOfficeController.index()
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK,
                                                       'branch_offices', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }

}

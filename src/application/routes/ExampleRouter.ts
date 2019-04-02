import { Request, Response, NextFunction, RequestHandler } from 'express';
import ExampleController from '../../presentation/controllers/ExampleController';
import BaseRouter from './base/BaseRouter';
import ResponseHandler from '../util/ResponseHandler';
import { httpCodes } from '../config/ErrorCode';

export default class ExampleRouter extends BaseRouter {
  constructor(route: string, private exampleController: ExampleController) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes() {
    this.router.get('/ok', this.index());
    this.router.get('/example/:id', this.single());
    this.router.put('/update', this.update());

  }

  index(): RequestHandler {
    return(req: Request, res: Response, next: NextFunction) => {
      this.exampleController.index()
      .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'example', response))
      .catch(err => ResponseHandler.sendError(res, err));
    };
  }

  single(): RequestHandler {
    return(req: Request, res: Response, next: NextFunction) => {
      this.exampleController.single(req.params.id)
      .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'example', response))
      .catch(err => ResponseHandler.sendError(res, err));
    };
  }

  update(): RequestHandler {
    return(req: Request, res: Response, next: NextFunction) => {
      this.exampleController.update(req.body.id, req.body.name)
      .then(response => ResponseHandler.sendResponse(res, httpCodes.OK, 'updated', response))
      .catch(err => ResponseHandler.sendError(res, err));
    };
  }

}

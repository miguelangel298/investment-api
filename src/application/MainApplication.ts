import express, { RequestHandler, Response, Request } from 'express';
import { Connection } from 'typeorm';
import DatabaseConnection from '../data/DatabaseConnection';
import ResponseHandler from './util/ResponseHandler';
import Application from './Application';
import { NextFunction } from 'connect';
import { httpCodes } from './config/ErrorCode';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import UserRouter from './routes/UserRouter';
import ControllerModule from './modules/ControllerModule';

export default class MainApplication extends Application {
  constructor(route: string, app: express.Application) {
    super(route, app);
  }

  public async initialize() {
    try {
      const dbInfo: Connection = await DatabaseConnection.connect();
      DatabaseConnection.printConnectionInfo(dbInfo.options as PostgresConnectionOptions);
      this.createApp();
      return true;
    } catch (e) {
      console.debug(e);
    }
  }

  createApp() {

    // Create routers
    this.router.get('/', this.homePage());
    this.addRouter(new UserRouter('/users', ControllerModule.getUserController()));
    this.router.use(this.notFound());
  }

  notFound(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      const err: any = {
        code: httpCodes.NOT_FOUND,
      };
      return ResponseHandler.sendError(res, err);
    };
  }

  homePage(): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
      return ResponseHandler.sendResponse(res, httpCodes.OK);
    };
  }
}

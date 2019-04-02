import express, { RequestHandler, Response, Request } from 'express';
import { Connection } from 'typeorm';
import DatabaseConnection from '../data/DatabaseConnection';
import ResponseHandler from './util/ResponseHandler';
import Application from './Application';
import { NextFunction } from 'connect';
import { httpCodes } from './config/ErrorCode';
import ExampleController from '../presentation/controllers/ExampleController';
import ExampleRouter from './routes/ExampleRouter';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

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
    const exampleController = new ExampleController();
    // Create routers
    this.router.get('/', this.homePage());
    this.addRouter(new ExampleRouter('/users', exampleController));
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

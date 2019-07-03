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
import AuthRouter from './routes/AuthRouter';
import PersonRouter from './routes/PersonRouter';
import { authMiddleware } from './middlewares/authMiddleware';
import CountryRouter from './routes/CountryRouter';
import GenderRouter from './routes/GenderRouter';
import BranchOfficeRouter from './routes/BranchOfficeRouter';
import CivilStatusRouter from './routes/CivilStatusRouter';
import ProvinceRouter from './routes/ProvinceRouter';
import MunicipalityRouter from './routes/MunicipalityRouter';
import PersonJobRouter from './routes/PersonJobRouter';

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

    const authenticationMiddleware = authMiddleware();

    this.addRouter(new AuthRouter('/auth', ControllerModule.getAuthController()));
    // Create routers
    this.router.get('/', this.homePage());
    this.addRouter(new PersonRouter('/persons',
                                    ControllerModule.getPersonController(),
                                    authenticationMiddleware));
    this.addRouter(new UserRouter('/users',
                                  ControllerModule.getUserController(),
                                  authenticationMiddleware));
    this.addRouter(new CountryRouter('/countries',
                                     ControllerModule.getCountryController(),
                                     authenticationMiddleware));
    this.addRouter(new GenderRouter('/genders',
                                    ControllerModule.getGenderController(),
                                    authenticationMiddleware));
    this.addRouter(new BranchOfficeRouter('/branch-offices',
                                          ControllerModule.getBranchOfficeController(),
                                          authenticationMiddleware));
    this.addRouter(new CivilStatusRouter('/civil-status',
                                         ControllerModule.getCivilStatusController(),
                                         authenticationMiddleware));
    this.addRouter(new ProvinceRouter('/provinces',
                                      ControllerModule.getProvinceController(),
                                      authenticationMiddleware));
    this.addRouter(new MunicipalityRouter('/municipalities',
                                          ControllerModule.getMunicipalityController(),
                                          authenticationMiddleware));
    this.addRouter(new PersonJobRouter('/person-jobs',
                                       ControllerModule.getPersonJobController(),
                                       authenticationMiddleware));
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

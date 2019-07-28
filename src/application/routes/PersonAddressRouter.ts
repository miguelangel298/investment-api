import BaseRouter from './base/BaseRouter';
import PersonAddressController from '../../presentation/controllers/PersonAddressController';
import { RequestHandler, Request, Response } from 'express-serve-static-core';
import PayloadValidator from '../util/PayloadValidator';
import { buildError, httpCodes } from '../config/ErrorCode';
import ResponseHandler from '../util/ResponseHandler';
import CreatePersonAddressCommand from '../../domain/command/CreatePersonAddressCommand';
import { RequestWithUser } from '../util/RequestWithUser';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import { permissionUser } from '../../data/entities/PermissionEntity';

export default class PersonAddressRouter extends BaseRouter {
  constructor(route: string,
              protected personAddressController: PersonAddressController,
              protected tokenMiddleware: RequestHandler) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.post('/', authorizationMiddleware(permissionUser.MANAGE_PERSONS), this.create());
  }

  /**
   * This method is for adding addresses to a person.
   * @params { CreatePersonAddressCommand[] }
   * @returns { PersonAddressDTO[] }
   */
  create(): RequestHandler {
    return (req: RequestWithUser, res: Response) => {
      /**
       * Validate the required fields before calling th e controller.
       */
      const payloadValidate = new PayloadValidator(req);
      payloadValidate.validate(['detail',
        'person', 'province']);
      const errors = payloadValidate.getErrorsArray('personAddress');

      if (errors) {
        const responseError = buildError(httpCodes.BAD_REQUEST, errors);
        return ResponseHandler.sendError(res, responseError);
      }

      const personAddress: CreatePersonAddressCommand[] =
        req.body.personAddress.map((item: CreatePersonAddressCommand) => {
          const address = { } as CreatePersonAddressCommand;
          address.sector = item.sector;
          address.building = item.building;
          address.detail = item.detail;
          address.number = item.number;
          address.province = item.province;
          address.person = item.person;
          address.active = item.active;
          address.createdBy = req.user.id;
          return address;
        });
      this.personAddressController.create(personAddress).then(response =>
      ResponseHandler.sendResponse(res, httpCodes.CREATED, 'personAddress', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

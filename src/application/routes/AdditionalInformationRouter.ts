import BaseRouter from './base/BaseRouter';
import AdditionalInformationController
  from '../../presentation/controllers/AdditionalInformationController';
import { RequestHandler, Response, Request } from 'express';
import PayloadValidator from '../util/PayloadValidator';
import ResponseHandler from '../util/ResponseHandler';
import { buildError, httpCodes } from '../config/ErrorCode';
import CreateAdditionalInformationCommand from
    '../../domain/command/CreateAdditionalInformationCommand';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import { permissionUser } from '../../data/entities/PermissionEntity';

export default class AdditionalInformationRouter extends BaseRouter {
  constructor(route: string,
              protected tokenMiddleware: RequestHandler,
              protected additionalInformationController: AdditionalInformationController) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.post('/', authorizationMiddleware(permissionUser.MANAGE_PERSONS), this.create());
  }

  /**
   * This method is for adding job information to a person.
   * All fields are required.
   * @params { CreateAdditionalInformationCommand }
   * @return { AdditionalInformationDTO }
   */
  create(): RequestHandler {
    return (req: Request, res: Response) => {
      /**
       * Validate the required fields before calling th e controller.
       */
      const payloadValidate = new PayloadValidator(req);
      payloadValidate.validate(['fatherName',
        'motherName', 'civilStatus', 'dependents', 'person']);
      const errors = payloadValidate.getErrors();

      if (errors) {
        const responseError = buildError(httpCodes.BAD_REQUEST, errors);
        return ResponseHandler.sendError(res, responseError);
      }

      const additionalInformation: CreateAdditionalInformationCommand = {
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        civilStatus: req.body.civilStatus,
        dependents: req.body.dependents,
        person: req.body.person,
      };

      this.additionalInformationController.create(additionalInformation)
        .then(response =>
          ResponseHandler.sendResponse(res, httpCodes.CREATED, 'additionalInformation', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

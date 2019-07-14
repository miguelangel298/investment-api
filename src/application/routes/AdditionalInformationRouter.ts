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
import GetAdditionalInformationQuery from '../../domain/queries/GetAdditionalInformationQuery';
import UpdateAdditionalInformationCommand
  from '../../domain/command/UpdateAdditionalInformationCommand';

export default class AdditionalInformationRouter extends BaseRouter {
  constructor(route: string,
              protected additionalInformationController: AdditionalInformationController,
              protected tokenMiddleware: RequestHandler) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.post('/', authorizationMiddleware(permissionUser.MANAGE_PERSONS), this.create());
    this.router.get('/:id', authorizationMiddleware(permissionUser.MANAGE_PERSONS), this.show());
    this.router.put('/:id', authorizationMiddleware(permissionUser.MANAGE_PERSONS), this.update());
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

  /**
   * Get the additional information of a persona.
   * @params { GetAdditionalInformationQuery }
   * @return { AdditionalInformationDTO }
   */
  show(): RequestHandler {
    return (req: Request, res: Response) => {

      const getAdditionalInformationQuery: GetAdditionalInformationQuery = {
        person: req.params.id,
      };

      this.additionalInformationController.show(getAdditionalInformationQuery)
        .then(response => ResponseHandler.sendResponse(
          res, httpCodes.OK, 'additionalInformation', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }

  /**
   * This method is for update job information to a person.
   * @params { UpdateAdditionalInformationCommand }
   * @return { AdditionalInformationDTO }
   */
  update(): RequestHandler {
    return (req: Request, res: Response) => {
      /**
       * Validate the required fields before calling the controller.
       */
      const payloadValidate = new PayloadValidator(req);
      payloadValidate.validate(['fatherName',
        'motherName', 'civilStatus', 'dependents']);
      const errors = payloadValidate.getErrors();

      if (errors) {
        const responseError = buildError(httpCodes.BAD_REQUEST, errors);
        return ResponseHandler.sendError(res, responseError);
      }

      const additionalInformation: UpdateAdditionalInformationCommand = {
        fatherName: req.body.fatherName,
        motherName: req.body.motherName,
        civilStatus: req.body.civilStatus,
        dependents: req.body.dependents,
        person: req.params.id,
      };

      this.additionalInformationController.update(additionalInformation)
        .then(response => ResponseHandler.sendResponse(
          res, httpCodes.CREATED, 'additionalInformation', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }
}

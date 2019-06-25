import BaseRouter from './base/BaseRouter';
import { Request, RequestHandler, Response } from 'express';
import PersonController from '../../presentation/controllers/PersonController';
import PayloadValidator from '../util/PayloadValidator';
import { buildError, httpCodes } from '../config/ErrorCode';
import ResponseHandler from '../util/ResponseHandler';
import CreatePersonCommand from '../../domain/command/CreatePersonCommand';
import GetPersonByCardIdQuery from '../../domain/queries/GetPersonByCardIdQuery';
import { RequestWithUser } from '../util/RequestWithUser';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import { permissionUser } from '../../data/entities/PermissionEntity';

export default class PersonRouter extends BaseRouter {
  constructor(route: string,
              protected personController: PersonController,
              protected tokenMiddleware: RequestHandler) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes(): void {
    this.router.use(this.tokenMiddleware);
    this.router.post('/', authorizationMiddleware(permissionUser.MANAGE_PERSONS), this.create());
    this.router.get('/:cardID', this.show());
  }

  /**
   * Create a person depending on the parameters received,
   * it is not allowed to create a person with the same card id or passport.
   * @params { CreatePersonCommand }
   * @returns { PersonDTO }
   */
  create(): RequestHandler {
    return(req: RequestWithUser, res: Response) => {
      /**
       * Validate the required fields before calling the controller.
       */
      const payloadValidate = new PayloadValidator(req);
      payloadValidate.validate(['names',
        'firstSurname', 'birthDate', 'genderBy',
        'nationalityBy']);
      const errors = payloadValidate.getErrors();

      if (errors) {
        const responseError = buildError(httpCodes.BAD_REQUEST, errors);
        return ResponseHandler.sendError(res, responseError);
      }

      const person: CreatePersonCommand = {
        names: req.body.names,
        firstSurname: req.body.firstSurname,
        secondSurname: req.body.secondSurname,
        birthDate: req.body.birthDate,
        cardId: req.body.cardId,
        passport: req.body.passport,
        genderBy: req.body.genderBy,
        nationalityBy: req.body.nationalityBy,
        createdBy: req.user.id,
      };

      this.personController.create(person)
        .then(response => ResponseHandler.sendResponse(res, httpCodes.CREATED,
                                                       'persons', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }

  /**
   * Obtain the value sent through the assigned parameter `cardID`,
   * validate the value received.
   * @params { GetPersonByCardIdQuery }
   * @Return { PersonDTO }
   */
  show(): RequestHandler {
    return(req: Request, res: Response) => {
      /**
       * Validate the required fields before calling the controller.
       */
      const payloadValidate = new PayloadValidator(req);
      payloadValidate.validate(['cardID']);
      const errors = payloadValidate.getErrors();

      if (errors) {
        const response = buildError(httpCodes.BAD_REQUEST, errors);
        return ResponseHandler.sendError(res, response);
      }

      const person: GetPersonByCardIdQuery = {
        cardID: req.params.cardID,
      };

      this.personController.show(person)
        .then(response => ResponseHandler.sendResponse(res, httpCodes.OK,
                                                       'persons', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }

}

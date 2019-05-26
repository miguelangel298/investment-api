import BaseRouter from './base/BaseRouter';
import { Request, RequestHandler, Response } from 'express';
import PersonController from '../../presentation/controllers/PersonController';
import PayloadValidator from '../util/PayloadValidator';
import { buildError, httpCodes } from '../config/ErrorCode';
import ResponseHandler from '../util/ResponseHandler';
import CreatePersonCommand from '../../domain/command/CreatePersonCommand';

export default class PersonRouter extends BaseRouter {
  constructor(route: string, protected personController: PersonController) {
    super(route, false);
    this.addRoutes();
  }

  addRoutes(): void {
    this.router.post('/', this.create());
  }

  create(): RequestHandler {
    return(req: Request, res: Response) => {
      const payloadValidate = new PayloadValidator(req);
      payloadValidate.validate(['names',
        'firstSurname', 'secondSurname', 'birthDate', 'genderBy',
        'nationalityBy', 'cardId', 'createdBy']);
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
        createdBy: req.body.createdBy,
      };

      this.personController.create(person)
        .then(response => ResponseHandler.sendResponse(res, httpCodes.CREATED,
                                                       'persons', response))
        .catch(err => ResponseHandler.sendError(res, err));
    };
  }

}

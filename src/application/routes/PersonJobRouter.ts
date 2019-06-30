import BaseRouter from './base/BaseRouter';
import PersonJobController from '../../presentation/controllers/PersonJobController';
import { Response, RequestHandler } from 'express';
import PayloadValidator from '../util/PayloadValidator';
import { buildError, httpCodes } from '../config/ErrorCode';
import ResponseHandler from '../util/ResponseHandler';
import { AddJobToPersonCommand } from '../../domain/command/AddJobToPersonCommand';
import { RequestWithUser } from '../util/RequestWithUser';
import { authorizationMiddleware } from '../middlewares/authorizationMiddleware';
import { permissionUser } from '../../data/entities/PermissionEntity';

export default class PersonJobRouter extends BaseRouter {
  constructor(route: string,
              protected personJobController: PersonJobController,
              protected tokenMiddleware: RequestHandler) {
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
   * @params { AddJobToPersonCommand[] }
   * @returns { PersonJobDTO[] }
   */
  create(): RequestHandler {
    return (req: RequestWithUser, res: Response) => {
      // console.log(`this el request: ${req.body.personJobs}`);
      /**body
       * Validate the required fields before calling th e controller.
       */
      const payloadValidate = new PayloadValidator(req);
      payloadValidate.validate(['position',
        'salary', 'dateAdmission', 'employeeCode',
        'supervisorName'])
      const errors = payloadValidate.getErrors('personJobs');

      if (errors) {
        const responseError = buildError(httpCodes.BAD_REQUEST, errors);
        return ResponseHandler.sendError(res, responseError);
      }

      const newJobs: AddJobToPersonCommand[] =
        req.body.personJobs.map((job: AddJobToPersonCommand) => {
          const newJob: AddJobToPersonCommand = { } as AddJobToPersonCommand;
          newJob.position = job.position;
          newJob.salary = job.salary;
          newJob.dateAdmission = job.dateAdmission;
          newJob.employeeCode = job.employeeCode;
          newJob.supervisorName = job.supervisorName;
          newJob.supervisorPhone = job.supervisorPhone;
          newJob.currentJob = job.currentJob;
          newJob.person = job.person;
          newJob.branchOffice = job.branchOffice;
          newJob.createdBy = req.user.id;
          return newJob;
        });

      this.personJobController.create(newJobs)
        .then(response => ResponseHandler.sendResponse(
          res, httpCodes.CREATED, 'personJobs', response))
        .catch(err => ResponseHandler.sendError(res, err));

    };
  }
}

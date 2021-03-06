import IPersonJobRepository from '../../data/repository/PersonJobRepository/IPersonJobRepository';
import { AddJobToPersonCommand,
  AddJobToPersonCommandHandler } from '../../domain/command/AddJobToPersonCommand';
import PersonJobDTO from '../../domain/DTOs/PersonJobDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import GetPersonJobsQuery,
{ GetPersonJobsQueryHandler } from '../../domain/queries/GetPersonJobsQuery';
import UpdateJobsToPersonCommand, { UpdateJobsToPersonCommandHandler }
  from '../../domain/command/UpdateJobsToPersonCommand';

export default class PersonJobController {

  constructor(protected personJobRepository: IPersonJobRepository) { }
  /**
   * This command is for adding job information to a person.
   * All fields are required.
   * @params { AddJobToPersonCommand[] }
   * @returns { PersonJobDTO[] }
   */
  async create(command: AddJobToPersonCommand[]): Promise<PersonJobDTO[]> {
    try {
      // We instanced the command and proceed to add job information.
      const addJobToPersonCommandHandler =
        new AddJobToPersonCommandHandler(this.personJobRepository);

      await addJobToPersonCommandHandler.handle(command);

      /**
       * We look for the person who adds the information and creates
       * the instance of the query to return all the job information.
       */
      const query: GetPersonJobsQuery = {
        personId: command[0].person,
      };

      const getPersonJobsQueryHandler = new GetPersonJobsQueryHandler(this.personJobRepository);
      return await getPersonJobsQueryHandler.handle(query);
    } catch (e) {
      throw buildRawError(e);
    }
  }

  /**
   * The instance of the query to return all the job information.
   * @param query: { GetPersonJobsQuery }
   * @returns { PersonJobDTO[] }
   */
  async show(query: GetPersonJobsQuery): Promise<PersonJobDTO[]> {
    try {
      const getPersonJobsQueryHandler = new GetPersonJobsQueryHandler(this.personJobRepository);
      return await getPersonJobsQueryHandler.handle(query);
    } catch (e) {
      throw buildRawError(e);
    }
  }

  /**
   * This command is for update job information to a person.
   * All fields are required.
   * @params { UpdateJobsToPersonCommand[] }
   * @returns { PersonJobDTO[] }
   */
  async update(params: UpdateJobsToPersonCommand[]): Promise<PersonJobDTO[]> {
    try {
      const updateJobsPersonCommandHandler =
        new UpdateJobsToPersonCommandHandler(this.personJobRepository);

      await updateJobsPersonCommandHandler.handle(params);

      /**
       * We look for the person who updated the information and instanced
       * the query to return all the job information of the person.
       */
      const query: GetPersonJobsQuery = {
        personId: params[0].person,
      };

      const getPersonJobsQueryHandler = new GetPersonJobsQueryHandler(this.personJobRepository);
      return await getPersonJobsQueryHandler.handle(query);
    } catch (e) {
      throw buildRawError(e);
    }
  }
}

import { IQuery, IQueryHandler } from './base/IQuery';
import PersonJobDTO from '../DTOs/PersonJobDTO';
import IPersonJobRepository from '../../data/repository/PersonJobRepository/IPersonJobRepository';

export default interface GetPersonJobsQuery extends IQuery {
  personId: number;
}
/**
 * Get the list of job information of the person.
 * @param { GetPersonJobsQuery }
 * @returns { PersonJobDTO[] }
 */
export class GetPersonJobsQueryHandler implements IQueryHandler<PersonJobDTO[]> {
  constructor(protected personJobRepository: IPersonJobRepository) { }

  async handle(query: GetPersonJobsQuery): Promise<PersonJobDTO[]> {
    const jobs = await this.personJobRepository.find({
      where: { person: query.personId },
    });
    return jobs.map(job => new PersonJobDTO(job));
  }

}

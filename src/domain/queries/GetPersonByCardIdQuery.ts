import { IQuery, IQueryHandler } from './base/IQuery';
import PersonDTO from '../DTOs/PersonDTO';
import IPersonRepository from '../../data/repository/PersonRepository/IPersonRepository';

export default interface GetPersonByCardIdQuery extends IQuery {
  cardID: number;
}

export class GetPersonByCardIdQueryHandler implements IQueryHandler<PersonDTO> {
  constructor(protected personRepository: IPersonRepository) { }
  async handle(query: GetPersonByCardIdQuery): Promise<PersonDTO> {
    const person = await this.personRepository.findOne({ cardId: query.cardID });
    return new PersonDTO(person);
  }

}

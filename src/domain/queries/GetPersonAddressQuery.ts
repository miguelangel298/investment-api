import { IQuery, IQueryHandler } from './base/IQuery';
import PersonAddressDTO from '../DTOs/PersonAddressDTO';
import IPersonAddressRepository from
    '../../data/repository/PersonAddressRepository/IPersonAddressRepository';

export default interface GetPersonAddressQuery extends IQuery {
  person: number;
}

/**
 * Get the list of address of the person.
 * @param { GetPersonAddressQuery }
 * @returns { PersonAddressDTO[] }
 */
export class GetPersonAddressQueryHandler implements IQueryHandler<PersonAddressDTO[]> {
  constructor(protected personAddressRepository: IPersonAddressRepository) { }

  async handle(query: GetPersonAddressQuery): Promise<PersonAddressDTO[]> {

    const address = await this.personAddressRepository.find({
      relations: ['person'],
      where: { person: query.person },
    });

    return address.map(item => new PersonAddressDTO(item));
  }

}

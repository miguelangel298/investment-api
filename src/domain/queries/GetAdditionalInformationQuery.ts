import { IQuery, IQueryHandler } from './base/IQuery';
import AdditionalInformationDTO from '../DTOs/AdditionalInformationDTO';
import IAdditionalInformationRepository
  from '../../data/repository/AdditionalInformationRepository/IAdditionalInformationRepository';
import PersonEntity from '../../data/entities/PersonEntity';

export default interface GetAdditionalInformationQuery extends IQuery {
  person: number;
}

/**
 * Get the additional information of a persona.
 * @param { GetAdditionalInformationQuery }
 * @returns { AdditionalInformationDTO }
 */
export class GetAdditionalInformationQueryHandler
  implements IQueryHandler<AdditionalInformationDTO> {
  constructor(protected additionalInformationRepository: IAdditionalInformationRepository) { }

  async handle(query: GetAdditionalInformationQuery): Promise<AdditionalInformationDTO> {
    // Instance of person for each to param in additional information.
    const person = new PersonEntity();
    person.id = query.person;

    const information = await this.additionalInformationRepository.findOne(person);
    return new AdditionalInformationDTO(information);
  }

}

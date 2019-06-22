import { IQueryHandler } from './base/IQuery';
import GenderDTO from '../DTOs/GenderDTO';
import IGenderRepository from '../../data/repository/GenderRepository/IGenderRepository';

/**
 * Get the list of genders.
 * @returns { GenderDTO[] }
 */
export class GetGendersQuery implements IQueryHandler<GenderDTO[]> {
  constructor(protected genderRepository: IGenderRepository) { }

  async handle(): Promise<GenderDTO[]> {
    const genders = await this.genderRepository.find({});
    return genders.map(gender => new GenderDTO(gender));
  }

}

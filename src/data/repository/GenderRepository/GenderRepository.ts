import { Repository, EntityRepository } from 'typeorm';
import GenderEntity from '../../entities/GenderEntity';
import IGenderRepository from './IGenderRepository';

@EntityRepository(GenderEntity)
export default class GenderRepository extends Repository<GenderEntity>
  implements IGenderRepository{ }

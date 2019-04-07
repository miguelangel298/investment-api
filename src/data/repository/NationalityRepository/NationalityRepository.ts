import { Repository, EntityRepository } from 'typeorm';
import NationalityEntity from '../../entities/NationalityEntity';
import INationalityRepository from './INationalityRepository';

@EntityRepository(NationalityEntity)
export default class NationalityRepository extends Repository<NationalityEntity>
  implements INationalityRepository { }

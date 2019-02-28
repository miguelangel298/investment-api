import { Repository, EntityRepository } from 'typeorm';
import NationalityEntity from '../entities/NationalityEntity';

@EntityRepository(NationalityEntity)
export default class NationalityRepository extends Repository<NationalityEntity> { }

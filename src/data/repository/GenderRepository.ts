import { Repository, EntityRepository } from 'typeorm';
import GenderEntity from '../entities/GenderEntity';

@EntityRepository(GenderEntity)
export default class GenderRepository extends Repository<GenderEntity> { }

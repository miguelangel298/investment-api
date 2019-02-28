import { Repository, EntityRepository } from 'typeorm';
import RoleEntity from '../entities/RoleEntity';

@EntityRepository(RoleEntity)
export default class RoleRepository extends Repository<RoleEntity> { }

import { Repository, EntityRepository } from 'typeorm';
import RoleEntity from '../../entities/RoleEntity';
import IRoleRepository from './IRoleRepository';

@EntityRepository(RoleEntity)
export default class RoleRepository extends Repository<RoleEntity>
  implements  IRoleRepository { }

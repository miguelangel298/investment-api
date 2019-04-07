import { Repository, EntityRepository } from 'typeorm';
import PermissionGroupEntity from '../../entities/PermissionGroupEntity';
import IPermissionGroupRepository from './IPermissionGroupRepository';

@EntityRepository(PermissionGroupEntity)
export default class PermissionGroupRepository extends Repository<PermissionGroupEntity>
  implements IPermissionGroupRepository { }

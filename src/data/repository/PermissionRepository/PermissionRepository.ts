import { Repository, EntityRepository } from 'typeorm';
import PermissionEntity from '../../entities/PermissionEntity';
import IPermissionRepository from './IPermissionRepository';

@EntityRepository(PermissionEntity)
export default class PermissionRepository extends Repository<PermissionEntity>
  implements IPermissionRepository { }

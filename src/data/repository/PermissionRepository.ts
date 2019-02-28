import { Repository, EntityRepository } from 'typeorm';
import PermissionEntity from '../entities/PermissionEntity';

@EntityRepository(PermissionEntity)
export default class PermissionRepository extends Repository<PermissionEntity> { }

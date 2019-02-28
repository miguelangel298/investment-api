import { Repository, EntityRepository } from 'typeorm';
import PermissionGroupEntity from '../entities/PermissionGroupEntity';

@EntityRepository(PermissionGroupEntity)
export default class PermissionGroupRepository extends Repository<PermissionGroupEntity> { }

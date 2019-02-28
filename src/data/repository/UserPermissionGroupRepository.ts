import { EntityRepository, Repository } from 'typeorm';
import UserPermissionGroupEntity from '../entities/UserPermissionGroupEntity';

@EntityRepository(UserPermissionGroupEntity)
export default class UserPermissionGroupRepository extends Repository<UserPermissionGroupEntity> { }

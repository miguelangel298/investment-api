import { Repository, EntityRepository } from 'typeorm';
import GroupEntity from '../entities/GroupEntity';

@EntityRepository(GroupEntity)
export default class GroupRepository extends Repository<GroupEntity> { }

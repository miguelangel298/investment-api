import { Repository, EntityRepository } from 'typeorm';
import GroupEntity from '../../entities/GroupEntity';
import IGroupRepository from './IGroupRepository';

@EntityRepository(GroupEntity)
export default class GroupRepository extends Repository<GroupEntity>
  implements IGroupRepository { }

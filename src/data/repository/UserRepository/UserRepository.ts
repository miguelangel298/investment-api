import { Repository, EntityRepository } from 'typeorm';
import UserEntity from '../../entities/UserEntity';
import IUserRepository from './IUserRepository';

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> implements IUserRepository {

  getOneByQuery(query: Partial<UserEntity>): Promise<UserEntity> {
    return this.createQueryBuilder('user')
      .leftJoinAndSelect('user.userStatus', 'status')
      .leftJoinAndSelect('user.role', 'role')
      .leftJoinAndSelect('user.person', 'person')
      .leftJoinAndSelect('user.userPermissionGroups', 'userPermissionGroups')
      .leftJoinAndSelect('userPermissionGroups.group', 'group')
      .leftJoinAndSelect('group.permissionGroups', 'permissionGroups')
      .leftJoinAndSelect('permissionGroups.permission', 'permission')
      .where(query)
      .getOne();
  }

  getAllByFilterQuery(): Promise<UserEntity[]> {
    return this.createQueryBuilder('user')
      .innerJoinAndSelect('user.userStatus', 'status')
      .innerJoinAndSelect('user.role', 'role')
      .innerJoinAndSelect('user.person', 'person')
      // .orWhere('LOWER(person.names + person.firstSurname + person.secondSurname)  like :search',
      //   { search: `%${query.search}%` })
      // .orWhere('LOWER(user.username) like :search', { search: `%${query.search}%` })
      // .orWhere('LOWER(status.name) like :search', { search: `%${query.search}%` })
      // .offset(query.offset)
      // .limit(query.perPage)
      // .orderBy(query.field, query.sort)
      .getMany();
  }

}

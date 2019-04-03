import { Repository, EntityRepository } from 'typeorm';
import UserEntity from '../../entities/UserEntity';
import IUserRepository from './IUserRepository';

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> implements IUserRepository {

}

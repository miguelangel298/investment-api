import { Repository, EntityRepository } from 'typeorm';
import UserEntity from '../entities/UserEntity';

@EntityRepository(UserEntity)
export default class UserRepository extends Repository<UserEntity> {

}

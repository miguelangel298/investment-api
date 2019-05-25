import { ICommandHandler } from './base/ICommand';
import UserEntity from '../../data/entities/UserEntity';
import UserStatusEntity from '../../data/entities/UserStatusEntity';
import PersonEntity from '../../data/entities/PersonEntity';
import IUserRepository from '../../data/repository/UserRepository/IUserRepository';

export default interface CreateUserCommand {
  username: string;
  password: string;
  userStatus: number;
  role: number;
  person: number;
  createdBy: number;
}

export class CreateUserCommandHandle implements ICommandHandler {

  constructor(protected userRepository: IUserRepository) { }

  async handle(command: CreateUserCommand): Promise<void> {
    const user = new UserEntity();
    user.username = command.username;
    user.setPassword(command.password);
    user.userStatus = new UserStatusEntity();
    user.userStatus.id = command.userStatus;
    user.person = new PersonEntity();
    user.person.id = command.person;
    user.createdAt = new Date();
    user.createdBy = new UserEntity();
    user.createdBy.id = command.createdBy;

    await this.userRepository.insert(user);
  }

}

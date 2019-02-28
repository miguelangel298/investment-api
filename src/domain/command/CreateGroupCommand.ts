import { ICommand, ICommandHandler } from './base/ICommand';
import GroupRepository from '../../data/repository/GroupRepository';
import GroupEntity from '../../data/entities/GroupEntity';
import UserEntity from '../../data/entities/UserEntity';

export interface CreateGroupCommand extends ICommand {

  name: string;
  description: string;
  createdBy: number;

}

export class CreateGroupCommandHandler implements ICommandHandler {
  constructor(protected groupRepository: GroupRepository) { }

  async handle(command: CreateGroupCommand): Promise<void> {
    const group = new GroupEntity();
    group.name = command.name;
    group.description = command.description;
    group.createdBy = new UserEntity();
    group.createdBy.id = command.createdBy;
    group.createdAt = new Date();

    await this.groupRepository.insert(group);
  }
}

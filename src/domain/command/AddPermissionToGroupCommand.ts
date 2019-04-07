import { ICommand, ICommandHandler } from './base/ICommand';
import PermissionGroupRepository from '../../data/repository/PermissionGroupRepository/PermissionGroupRepository';
import GroupEntity from '../../data/entities/GroupEntity';
import PermissionGroupEntity from '../../data/entities/PermissionGroupEntity';
import PermissionEntity from '../../data/entities/PermissionEntity';

export interface AddPermissionToGroupCommand extends ICommand {

  groupId: number;
  permissionId: number[];

}

export class AddPermissionToGroupCommandHandler implements ICommandHandler {
  constructor(protected permissionGroupRepository: PermissionGroupRepository) { }

  async handle(command: AddPermissionToGroupCommand): Promise<void> {
    const group = new GroupEntity();
    group.id = command.groupId;
    await this.permissionGroupRepository.delete(group);
    const permissionGroup = command.permissionId.map((permission) => {
      const entity = new PermissionGroupEntity();
      entity.permission = new PermissionEntity();
      entity.permission.id = permission;
      entity.group = group;
      return entity;
    });
    await this.permissionGroupRepository.insert(permissionGroup);
  }
}

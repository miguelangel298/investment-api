import GroupEntity from '../../data/entities/GroupEntity';
import PermissionGroupDTO from './PermissionGroupDTO';
import UserDTO from './UserDTO';
import PermissionDTO from './PermissionDTO';

export default class GroupDTO {
  id: number;
  name: string;
  description: string;
  permissions: PermissionDTO[];
  createdBy: UserDTO;
  createdAt: Date;
  updatedBy: UserDTO;
  updatedAt: Date;
  permissionGroups: PermissionGroupDTO[];

  constructor(groupEntity: GroupEntity) {
    this.id = groupEntity.id;
    this.name = groupEntity.name;
    this.description = groupEntity.description;
    this.createdAt = groupEntity.createdAt;
    this.updatedAt = groupEntity.updatedAt;

    if (groupEntity.createdBy) {
      this.createdBy = new UserDTO(groupEntity.createdBy);
    }
    if (groupEntity.updatedBy) {
      this.updatedBy = new UserDTO(groupEntity.updatedBy);
    }
    if (groupEntity.permissionGroups) {
      this.permissions = groupEntity.permissionGroups.map(permissionGroup =>
        new PermissionDTO(permissionGroup.permission));
    }

  }
}

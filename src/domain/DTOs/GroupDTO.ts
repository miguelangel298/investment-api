import GroupEntity from '../../data/entities/GroupEntity';
import PermissionGroupDTO from './PermissionGroupDTO';
import UserDTO from './UserDTO';

export default class GroupDTO {
  id: number;
  name: string;
  description: string;
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
      this.updatedBy = groupEntity.updatedBy;
    }
    if (groupEntity.permissionGroups) {
      this.permissionGroups =
        groupEntity.permissionGroups.map(permission => new PermissionGroupDTO(permission));
    }
  }
}

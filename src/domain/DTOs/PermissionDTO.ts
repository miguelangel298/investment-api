import PermissionEntity from '../../data/entities/PermissionEntity';
import PermissionGroupDTO from './PermissionGroupDTO';

export default class PermissionDTO {

  id: number;
  name: string;
  description: string;
  code: string;
  permissionGroups: PermissionGroupDTO[];

  constructor(permissionEntity: PermissionEntity) {
    this.id = permissionEntity.id;
    this.name = permissionEntity.name;
    this.description = permissionEntity.description;
    this.code = permissionEntity.code;

    if (permissionEntity.permissionGroups) {
      this.permissionGroups =
        permissionEntity.permissionGroups.map(permission => new PermissionGroupDTO(permission));
    }

  }
}

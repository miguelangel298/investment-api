import GroupDTO from './GroupDTO';
import PermissionDTO from './PermissionDTO';
import PermissionGroupEntity from '../../data/entities/PermissionGroupEntity';

export default  class  PermissionGroupDTO {

  id: number;
  group: GroupDTO;
  permission: PermissionDTO;

  constructor(permissionGroupEntity: PermissionGroupEntity) {
    this.id = permissionGroupEntity.id;
    if (permissionGroupEntity.group) {
      this.group = new GroupDTO(permissionGroupEntity.group);
    }
    if (permissionGroupEntity.permission) {
      this.permission = new PermissionDTO(permissionGroupEntity.permission);
    }
  }
}

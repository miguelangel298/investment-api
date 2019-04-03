import GroupDTO from './GroupDTO';
import PermissionDTO from './PermissionDTO';
import PermissionGroupEntity from '../../data/entities/PermissionGroupEntity';

export default  class  PermissionGroupDTO {

  id: number;
  group: GroupDTO;
  permission: PermissionDTO;

  constructor(permissionGroupEntity: PermissionGroupEntity) {
    this.id = permissionGroupEntity.id;
    this.group = new GroupDTO(permissionGroupEntity.group);
    this.permission = new PermissionDTO(permissionGroupEntity.permission);
  }
}

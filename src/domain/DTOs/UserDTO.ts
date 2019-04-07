import UserEntity from '../../data/entities/UserEntity';
import UserStatusDTO from './UserStatusDTO';
import PersonDTO from './PersonDTO';
import UserPermissionGroupDTO from './UserPermissionGroupDTO';
import RoleDTO from './RoleDTO';

export default class UserDTO {
  id: number;
  username: string;
  userStatus: UserStatusDTO;
  person: PersonDTO;
  role: RoleDTO;
  createdBy: UserDTO;
  createdAt: Date;
  updatedBy: UserDTO;
  updatedAt: Date;
  userPermissionGroups: UserPermissionGroupDTO;

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.username = userEntity.username;
    if (userEntity.userStatus) {
      this.userStatus = new UserStatusDTO(userEntity.userStatus);
    }
    if (userEntity.person) {
      this.person = new PersonDTO(userEntity.person);
    }
    if (userEntity.createdBy) {
      this.createdBy = new UserDTO(userEntity.createdBy);
    }
    this.createdAt = userEntity.createdAt;
    if (userEntity.updatedBy) {
      this.updatedBy = new UserDTO(userEntity.updatedBy);
    }
    if (userEntity.role) {
      this.role = new RoleDTO(userEntity.role);
    }
    this.updatedAt = userEntity.updatedAt;

    if (userEntity.userPermissionGroups) {
      this.userPermissionGroups =
        new UserPermissionGroupDTO(userEntity.userPermissionGroups);
    }
  }
}

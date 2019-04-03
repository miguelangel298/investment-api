import UserEntity from '../../data/entities/UserEntity';
import UserStatusDTO from './UserStatusDTO';
import PersonDTO from './PersonDTO';
import UserPermissionGroupDTO from './UserPermissionGroupDTO';

export default class UserDTO {
  id: number;
  username: string;
  userStatus: UserStatusDTO;
  person: PersonDTO;
  createdBy: UserDTO;
  createdAt: Date;
  updatedBy: UserDTO;
  updatedAt: Date;
  userPermissionGroups: UserPermissionGroupDTO[];

  constructor(userEntity: UserEntity) {
    this.id = userEntity.id;
    this.username = userEntity.username;
    this.userStatus = new UserStatusDTO(userEntity.userStatus);
    this.person = new PersonDTO(userEntity.person);
    this.createdBy = new UserDTO(userEntity.createdBy);
    this.createdAt = userEntity.createdAt;
    if (userEntity.updatedBy) {
      this.updatedBy = new UserDTO(userEntity.updatedBy);
    }
    this.updatedAt = userEntity.updatedAt;
    this.userPermissionGroups = userEntity.userPermissionGroups.map(userPermission =>
      new UserPermissionGroupDTO(userPermission));
  }
}

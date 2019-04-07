import { CreateDateColumn, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import UserEntity from '../../data/entities/UserEntity';
import GroupEntity from '../../data/entities/GroupEntity';
import UserPermissionGroupEntity from '../../data/entities/UserPermissionGroupEntity';
import UserDTO from './UserDTO';
import GroupDTO from './GroupDTO';

export default class UserPermissionGroupDTO {

  id: number;
  user: UserDTO;
  group: GroupDTO;
  createdBy: UserDTO;
  createdAt: Date;
  updatedBy: UserDTO;
  updatedAt: Date;

  constructor(userPermissionGroupEntity: UserPermissionGroupEntity) {
    this.id = userPermissionGroupEntity.id;
    this.user = new UserDTO(userPermissionGroupEntity.user);
    this.group = new GroupDTO(userPermissionGroupEntity.group);
    this.createdBy = new UserDTO(userPermissionGroupEntity.createdBy);
    this.createdAt = userPermissionGroupEntity.createdAt;
    if (userPermissionGroupEntity.updatedBy) {
      this.updatedBy = new UserDTO(userPermissionGroupEntity.updatedBy);
    }
    this.updatedAt = userPermissionGroupEntity.updatedAt;
  }
}

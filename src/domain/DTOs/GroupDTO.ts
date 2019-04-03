import { Column, CreateDateColumn, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import UserEntity from '../../data/entities/UserEntity';
import PermissionGroupEntity from '../../data/entities/PermissionGroupEntity';
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
    this.createdBy = new UserDTO(groupEntity.createdBy);
    this.createdAt = groupEntity.createdAt;
    if (groupEntity.updatedBy) {
      this.updatedBy = groupEntity.updatedBy;
    }
    this.updatedAt = groupEntity.updatedAt;
    this.permissionGroups =
      groupEntity.permissionGroups.map(permission => new PermissionGroupDTO(permission));
  }
}

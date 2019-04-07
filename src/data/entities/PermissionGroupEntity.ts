import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import GroupEntity from './GroupEntity';
import PermissionEntity from './PermissionEntity';
import UserEntity from './UserEntity';

@Entity('permission_group')
export default class PermissionGroupEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @ManyToOne(() => GroupEntity, group => group.permissionGroups)
    @JoinColumn({ name: 'group_id' })
    group: GroupEntity;

  @ManyToOne(() => PermissionEntity, permission => permission.permissionGroups)
    @JoinColumn({ name: 'permission_id' })
    permission: PermissionEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'created_by' })
  createdBy: UserEntity;
}

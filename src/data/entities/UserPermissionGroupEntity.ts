import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import GroupEntity from './GroupEntity';
import UserEntity from './UserEntity';

@Entity('user_permission_group')
export default class UserPermissionGroupEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @ManyToOne(() => UserEntity, user => user.userPermissionGroups)
    @JoinColumn({ name: 'user_id' })
    user: UserEntity;

  @ManyToOne(() => GroupEntity, group => group.permissionGroups)
    @JoinColumn({ name: 'group_id' })
    group: GroupEntity;

  @ManyToOne(() => UserEntity, { nullable: true })
    @JoinColumn({ name: 'created_by' })
    createdBy: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

  @ManyToOne(() => UserEntity, { nullable: true })
    @JoinColumn({ name: 'updated_by' })
    updatedBy: UserEntity;

  @CreateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}

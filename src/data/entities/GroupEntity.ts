import {
  Entity,
  Column,
  OneToMany,
  ManyToOne,
  JoinColumn, PrimaryGeneratedColumn,
} from 'typeorm';
import PermissionGroupEntity from './PermissionGroupEntity';
import UserEntity from './UserEntity';

@Entity('groups')
export default class GroupEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    description: string;

  @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'created_by' })
    createdBy: UserEntity;

  @Column({ name: 'created_at' })
    createdAt: Date;

  @ManyToOne(() => UserEntity, { nullable: true })
    @JoinColumn({ name: 'updated_by' })
    updatedBy: UserEntity;

  @Column({ name: 'updated_at' })
    updatedAt: Date;

  @OneToMany(() => PermissionGroupEntity, permissionGroup => permissionGroup.group)
    permissionGroups: PermissionGroupEntity[];

}

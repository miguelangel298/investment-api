import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  OneToMany,
  } from 'typeorm';
import UserStatusEntity from './UserStatusEntity';
import PersonEntity from './PersonEntity';
import UserPermissionGroupEntity from './UserPermissionGroupEntity';
@Entity('users')
export default class UserEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    username: string;

  @Column()
    password: string;

  @ManyToOne(() => UserStatusEntity)
    @JoinColumn({ name: 'user_status_id' })
    userStatus: UserStatusEntity;

  @ManyToOne(() => PersonEntity)
    @JoinColumn({ name: 'person_id' })
    person: PersonEntity;

  @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'created_by' })
    createdBy: UserEntity;

  @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

  @ManyToOne(() => UserEntity, { nullable: true })
    @JoinColumn({ name: 'updated_by' })
    updatedBy: UserEntity;

  @CreateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

  @OneToMany(() => UserPermissionGroupEntity, userPermissionGroups => userPermissionGroups.user)
    userPermissionGroups: UserPermissionGroupEntity[];
}

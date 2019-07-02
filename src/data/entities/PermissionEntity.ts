import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PermissionGroupEntity from './PermissionGroupEntity';

@Entity('permission')
export default class PermissionEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    description: string;

  @Column()
    code: string;

  @OneToMany(() => PermissionGroupEntity, permissionGroup => permissionGroup.permission)
    permissionGroups: PermissionGroupEntity[];
}

/**
 * List of permissions that will be used
 * in the permission verification middleware.
 */
export enum permissionUser {
  MANAGE_PERSONS = 'manage_persons',
  MANAGE_WALLET = 'manage_wallet',

}

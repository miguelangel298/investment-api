import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
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

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roles')
export default class RoleEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    description: string;

}

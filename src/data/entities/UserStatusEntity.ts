import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user_status')
export default class UserStatusEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    description: string;

}

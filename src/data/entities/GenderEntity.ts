import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('sexes')
export default class GenderEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column()
    code: string;

}

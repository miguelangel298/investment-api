import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('civil_status')
export default class CivilStatusEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  status: string;
}

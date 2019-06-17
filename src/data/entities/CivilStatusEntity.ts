import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('civil_status')
export default class CivilStatusEntity {

  @PrimaryColumn()
  id: number;

  @Column()
  status: string;
}

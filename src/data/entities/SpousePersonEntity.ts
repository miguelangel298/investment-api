import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import PersonEntity from './PersonEntity';

@Entity('spouse_person')
export default class SpousePersonEntity {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  person: PersonEntity;
}

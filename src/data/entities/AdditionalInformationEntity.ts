import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import CivilStatusEntity from './CivilStatusEntity';
import PersonEntity from './PersonEntity';

@Entity('additional_information')
export default class AdditionalInformationEntity {

  @PrimaryColumn()
  id: number;

  @Column({ name: 'father_name' })
  fatherName: string;

  @Column({ name: 'mother_name' })
  motherName: string;

  @ManyToOne(() => CivilStatusEntity)
  @JoinColumn({ name: 'civil_status_id' })
  civilStatus: CivilStatusEntity;

  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  person: PersonEntity;
}

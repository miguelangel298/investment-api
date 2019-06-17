import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import ContactTypeEntity from './ContactTypeEntity';
import PersonEntity from './PersonEntity';

@Entity('person_contacts')
export default class PersonContactEntity {

  @PrimaryColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  ext: number;

  @Column()
  dependents: number;

  @ManyToOne(() => ContactTypeEntity)
  @JoinColumn({ name: 'contact_type_id' })
  contactType: ContactTypeEntity;

  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  person: PersonEntity;

}

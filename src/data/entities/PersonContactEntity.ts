import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import ContactTypeEntity from './ContactTypeEntity';
import PersonEntity from './PersonEntity';

@Entity('person_contacts')
export default class PersonContactEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: string;

  @Column()
  ext: number;

  @ManyToOne(() => ContactTypeEntity)
  @JoinColumn({ name: 'contact_type_id' })
  contactType: ContactTypeEntity;

  @ManyToOne(() => PersonEntity)
  @JoinColumn({ name: 'person_id' })
  person: PersonEntity;

}

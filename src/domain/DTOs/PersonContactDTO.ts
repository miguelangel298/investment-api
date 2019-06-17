import { Column, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import ContactTypeEntity from '../../data/entities/ContactTypeEntity';
import PersonEntity from '../../data/entities/PersonEntity';
import ContactTypeDTO from './ContactTypeDTO';
import PersonDTO from './PersonDTO';
import PersonContactEntity from '../../data/entities/PersonContactEntity';

export default class PersonContactDTO {

  id: number;
  value: string;
  ext: number;
  contactType: ContactTypeDTO;
  person: PersonDTO;

  constructor(protected personContact: PersonContactEntity) {

    this.id = personContact.id;
    this.value = personContact.value;
    this.ext = personContact.ext;
    this.contactType = new ContactTypeDTO(personContact.contactType);
    this.person = new PersonDTO(personContact.person);
  }
}

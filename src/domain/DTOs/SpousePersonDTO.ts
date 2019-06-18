import PersonDTO from './PersonDTO';
import SpousePersonEntity from '../../data/entities/SpousePersonEntity';

export default class SpousePersonDTO {

  id: number;
  name: string;
  phone: string;
  person: PersonDTO;

  constructor(protected spousePersonEntity: SpousePersonEntity) {
    this.id = spousePersonEntity.id;
    this.name = spousePersonEntity.name;
    this.phone = spousePersonEntity.phone;
    this.person = new PersonDTO(spousePersonEntity.person);
  }
}

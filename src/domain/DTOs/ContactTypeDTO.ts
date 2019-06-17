import ContactTypeEntity from '../../data/entities/ContactTypeEntity';

export default class ContactTypeDTO {

  id: number;
  name: string;

  constructor(protected contactType: ContactTypeEntity) {
    this.id = contactType.id;
    this.name = contactType.name;
  }
}

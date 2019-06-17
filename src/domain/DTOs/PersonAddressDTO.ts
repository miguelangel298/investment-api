import ProvinceDTO from './ProvinceDTO';
import UserDTO from './UserDTO';
import PersonAddressEntity from '../../data/entities/PersonAddressEntity';
import PersonDTO from './PersonDTO';

export default class PersonAddressDTO {

  id: number;
  sector: string;
  building: string;
  number: string;
  detail: string;
  active: boolean;
  person: PersonDTO;
  province: ProvinceDTO;
  createdBy: UserDTO;
  updatedBy: UserDTO;
  createdAt: Date;
  updatedAt: Date;

  constructor(protected personAddressEntity: PersonAddressEntity) {
    this.id = personAddressEntity.id;
    this.sector = personAddressEntity.sector;
    this.building = personAddressEntity.building;
    this.number = personAddressEntity.number;
    this.detail = personAddressEntity.detail;
    this.active = personAddressEntity.active;
    this.createdAt = personAddressEntity.createdAt;
    this.updatedAt = personAddressEntity.updatedAt;
    this.person = new PersonDTO(personAddressEntity.person);

    if (personAddressEntity.province) {
      this.province = new ProvinceDTO(personAddressEntity.province);
    }

    if (personAddressEntity.createdBy) {
      this.createdBy = new UserDTO(personAddressEntity.createdBy);
    }

    if (personAddressEntity.updatedBy) {
      this.updatedBy = new UserDTO(personAddressEntity.updatedBy);
    }

  }
}

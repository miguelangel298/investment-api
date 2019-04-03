import PersonEntity from '../../data/entities/PersonEntity';
import UserDTO from './UserDTO';
import GenderDTO from './GenderDTO';
import NationalityDTO from './NationalityDTO';

export default class PersonDTO {

  id: number;
  names: string;
  firstSurname: string;
  secondSurname: string;
  birthDate: Date;
  cardId: number;
  passport: string;
  gender: GenderDTO;
  nationality: NationalityDTO;
  createdBy: UserDTO;
  createdAt: Date;
  updatedBy: UserDTO;
  updatedAt: Date;
  users: UserDTO[];

  constructor(personEntity: PersonEntity) {
    this.id = personEntity.id;
    this.names = personEntity.names;
    this.firstSurname = personEntity.firstSurname;
    this.secondSurname = personEntity.secondSurname;
    this.birthDate = personEntity.birthDate;
    this.cardId = personEntity.cardId;
    this.passport = personEntity.passport;
    this.gender = new GenderDTO(personEntity.gender);
    this.nationality = new NationalityDTO(personEntity.nationality);
    if (personEntity.createdBy) {
      this.createdBy = new UserDTO(personEntity.createdBy);
    }
    this.createdAt = personEntity.createdAt;
    if (personEntity.updatedBy) {
      this.updatedBy = new UserDTO(personEntity.updatedBy);
    }
    this.updatedAt = personEntity.updatedAt;
    if (personEntity.users) {
      this.users = personEntity.users.map(user => new UserDTO(user));
    }
  }
}

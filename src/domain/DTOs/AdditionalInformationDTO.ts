import CivilStatusDTO from './CivilStatusDTO';
import PersonDTO from './PersonDTO';
import AdditionalInformationEntity from '../../data/entities/AdditionalInformationEntity';

export default class AdditionalInformationDTO {

  id: number;
  fatherName: string;
  motherName: string;
  dependents: number;
  civilStatus: CivilStatusDTO;
  person: PersonDTO;

  constructor(entity: AdditionalInformationEntity) {

    this.id = entity.id;
    this.motherName = entity.motherName;
    this.fatherName = entity.fatherName;
    this.dependents = entity.dependents;

    if (entity.civilStatus) {
      this.civilStatus = new CivilStatusDTO(entity.civilStatus);
    }
    if (entity.person) {
      this.person = new PersonDTO(entity.person);
    }
  }
}

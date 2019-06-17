import CivilStatusDTO from './CivilStatusDTO';
import PersonDTO from './PersonDTO';
import AdditionalInformationEntity from '../../data/entities/AdditionalInformationEntity';

export default class AdditionalInformationDTO {

  id: number;
  fatherName: string;
  motherName: string;
  civilStatus: CivilStatusDTO;
  person: PersonDTO;

  constructor(protected entity: AdditionalInformationEntity) {

    this.id = entity.id;
    this.motherName = entity.motherName;
    this.fatherName = entity.fatherName;
    this.civilStatus = new CivilStatusDTO(entity.civilStatus);
    this.person = new PersonDTO(entity.person);
  }
}

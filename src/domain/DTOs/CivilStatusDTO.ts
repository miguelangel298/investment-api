import CivilStatusEntity from '../../data/entities/CivilStatusEntity';

export default class CivilStatusDTO {

  id: number;
  name: string;

  constructor(protected civilStatus: CivilStatusEntity) {
    this.id = civilStatus.id;
    this.name = civilStatus.status;
  }

}

import GenderEntity from '../../data/entities/GenderEntity';

export default class GenderDTO {

  id: number;
  name: string;
  code: string;

  constructor(genderEntity: GenderEntity) {
    this.id = genderEntity.id;
    this.name = genderEntity.name;
    this.code = genderEntity.code;
  }
}

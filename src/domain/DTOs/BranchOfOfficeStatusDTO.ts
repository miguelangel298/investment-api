import BranchOfOfficeStatusEntity from '../../data/entities/BranchOfOfficeStatusEntity';

export default class BranchOfOfficeStatusDTO {

  id: number;
  name: string;

  constructor(protected entity: BranchOfOfficeStatusEntity) {
    this.id = entity.id;
    this.name = entity.name;
  }
}

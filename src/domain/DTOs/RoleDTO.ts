import RoleEntity from '../../data/entities/RoleEntity';

export default class RoleDTO {

  id: number;
  name: string;
  description: string;

  constructor(roleEntity: RoleEntity) {
    this.id = roleEntity.id;
    this.name = roleEntity.name;
    this.description = roleEntity.description;
  }
}

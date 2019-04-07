import UserStatusEntity from '../../data/entities/UserStatusEntity';

export default class UserStatusDTO {
  id: number;
  name: string;
  description: string;

  constructor(userStatusEntity: UserStatusEntity) {
    this.id = userStatusEntity.id;
    this.name = userStatusEntity.name;
    this.description = userStatusEntity.description;
  }
}

import UserDTO from './UserDTO';
import WalletEntity from '../../data/entities/WalletEntity';

export default class WalletDTO {

  id: number;
  name: string;
  description: string;
  representative: UserDTO;
  createdBy: UserDTO;
  updatedBy: UserDTO;
  createdAt: Date;
  updatedAt: Date;

  constructor(protected walletEntity: WalletEntity) {
    this.id = walletEntity.id;
    this.name = walletEntity.name;
    this.description = walletEntity.description;
    this.createdAt = walletEntity.createdAt;
    this.updatedAt = walletEntity.updatedAt;

    if (walletEntity.representative) {
      this.representative = new UserDTO(walletEntity.representative);
    }

    if (walletEntity.createdBy) {
      this.createdBy = new UserDTO(walletEntity.createdBy);
    }

    if (walletEntity.updatedBy) {
      this.updatedBy = new UserDTO(walletEntity.updatedBy);
    }
  }

}

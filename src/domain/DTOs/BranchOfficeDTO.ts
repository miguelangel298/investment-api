import CompanyDTO from './CompanyDTO';
import WalletDTO from './WalletDTO';
import BranchOfOfficeStatusDTO from './BranchOfOfficeStatusDTO';
import UserDTO from './UserDTO';
import BranchOfficeEntity from '../../data/entities/BranchOfficeEntity';

export default class BranchOfficeDTO {

  id: number;
  name: string;
  location: string;
  minPercent: number;
  maxPercent: number;
  company: CompanyDTO;
  wallet: WalletDTO;
  status: BranchOfOfficeStatusDTO;
  createdBy: UserDTO;
  updatedBy: UserDTO;
  createdAt: Date;
  updatedAt: Date;

  constructor(protected branchOfficeEntity: BranchOfficeEntity) {

    this.id = branchOfficeEntity.id;
    this.name = branchOfficeEntity.name;
    this.location = branchOfficeEntity.location;
    this.minPercent = branchOfficeEntity.minPercent;
    this.maxPercent = branchOfficeEntity.maxPercent;

    if (branchOfficeEntity.company) {
      this.company = new CompanyDTO(branchOfficeEntity.company);
    }
    if (branchOfficeEntity.wallet) {
      this.wallet = new WalletDTO(branchOfficeEntity.wallet);
    }
    if (branchOfficeEntity.status) {
      this.status = new BranchOfOfficeStatusDTO(branchOfficeEntity.status);
    }
    if (branchOfficeEntity.createdBy) {
      this.createdBy = new UserDTO(branchOfficeEntity.createdBy);
    }
    if (branchOfficeEntity.updatedBy) {
      this.updatedBy = new UserDTO(branchOfficeEntity.updatedBy);
    }
    this.updatedAt = branchOfficeEntity.updatedAt;
    this.createdAt = branchOfficeEntity.createdAt;
  }
}

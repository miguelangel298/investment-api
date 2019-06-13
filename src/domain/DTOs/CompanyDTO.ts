import BankDTO from './BankDTO';
import DayOfPaymentDTO from './DayOfPaymentDTO';
import CompanyEntity from '../../data/entities/CompanyEntity';

export default class CompanyDTO {

  id: number;
  name: string;
  phone: string;
  ext: string;
  email: string;
  address: string;
  bankBy: BankDTO;
  dayOfPaymentBy: DayOfPaymentDTO;

  constructor(protected company: CompanyEntity) {
    this.id = company.id;
    this.name = company.name;
    this.phone = company.phone;
    this.ext = company.ext;
    this.email = company.email;
    this.address = company.address;

    if (company.bankBy) {
      this.bankBy = new BankDTO(company.bankBy);
    }

    if (company.dayOfPaymentBy) {
      this.dayOfPaymentBy = new DayOfPaymentDTO(company.dayOfPaymentBy);
    }
  }
}

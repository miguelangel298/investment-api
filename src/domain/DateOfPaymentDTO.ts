import CompanyDTO from './DTOs/CompanyDTO';
import DateOfPaymentEntity from '../data/entities/DateOfPaymentEntity';

export default class DateOfPaymentDTO {

  id: number;
  day: number;
  company: CompanyDTO;

  constructor(protected entity: DateOfPaymentEntity) {
    this.id = entity.id;
    this.day = entity.day;

    if (entity.company) {
      this.company = new CompanyDTO(entity.company);
    }
  }
}

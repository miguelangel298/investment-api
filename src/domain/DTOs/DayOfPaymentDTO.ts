import DayOfPaymentEntity from '../../data/entities/DayOfPaymentEntity';

export default class DayOfPaymentDTO {

  id: number;
  name: string;
  dues: number;

  constructor(protected dayOfPaymentEntity: DayOfPaymentEntity) {
    this.id = dayOfPaymentEntity.id;
    this.name = dayOfPaymentEntity.name;
    this.dues = dayOfPaymentEntity.dues;
  }
}

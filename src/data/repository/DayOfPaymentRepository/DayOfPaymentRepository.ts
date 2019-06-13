import { Repository } from 'typeorm';
import IDayOfPaymentRepository from './IDayOfPaymentRepository';

export default class DayOfPaymentRepository extends Repository<DayOfPaymentRepository>
  implements IDayOfPaymentRepository { }

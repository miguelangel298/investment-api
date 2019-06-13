import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import BankEntity from './BankEntity';
import DayOfPaymentEntity from './DayOfPaymentEntity';

@Entity('companies')
export default class CompanyEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  ext: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @ManyToOne(() => BankEntity)
  @JoinColumn({ name: 'bank_id' })
    bankBy: BankEntity;

  @ManyToOne(() => DayOfPaymentEntity)
  @JoinColumn({ name: 'day_of_payment_id' })
    dayOfPaymentBy: DayOfPaymentEntity;
}

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import CompanyEntity from './CompanyEntity';

@Entity('dates_of_payments')
export default class DateOfPaymentEntity {

  @PrimaryColumn()
  id: number;

  @Column()
  day: number;

  @ManyToOne(() => CompanyEntity)
  @JoinColumn({ name: 'company_id' })
  company: CompanyEntity;
}

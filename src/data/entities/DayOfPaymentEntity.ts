import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('days_of_payments')
export default class DayOfPaymentEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  dues: number;
}

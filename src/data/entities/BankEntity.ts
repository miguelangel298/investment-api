import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bank')
export default class BankEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

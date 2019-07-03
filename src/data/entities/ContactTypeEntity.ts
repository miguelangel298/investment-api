import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('contact_type')
export default class ContactTypeEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

}

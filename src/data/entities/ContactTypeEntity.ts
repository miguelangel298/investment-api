import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('contact_type')
export default class ContactTypeEntity {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

}

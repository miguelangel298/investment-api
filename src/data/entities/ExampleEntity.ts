import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class ExampleEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}

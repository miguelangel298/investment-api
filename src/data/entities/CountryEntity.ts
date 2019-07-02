import { Entity, Column, PrimaryGeneratedColumn }
from 'typeorm';

@Entity('countries')
export default class CountryEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @Column({ name: 'acronym' })
    code: string;

}

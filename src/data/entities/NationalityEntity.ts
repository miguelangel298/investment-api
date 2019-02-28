import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import CountryEntity from './CountryEntity';

@Entity('nationalities')

export default class NationalityEntity {

  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;

  @ManyToOne(() => CountryEntity)
    @JoinColumn({ name: 'country_id' })
    countryBy: CountryEntity;
}

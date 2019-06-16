import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import CountryEntity from './CountryEntity';

@Entity('provinces')
export default class ProvinceEntity {

  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @ManyToOne(() => CountryEntity)
  @JoinColumn({ name: 'country_id' })
  country: CountryEntity;

}

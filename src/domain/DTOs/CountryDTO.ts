import { Column, PrimaryGeneratedColumn } from 'typeorm';
import CountryEntity from '../../data/entities/CountryEntity';

export default class CountryDTO {

  id: number;
  name: string;
  code: string;

  constructor(countryEntity: CountryEntity) {
    this.id = countryEntity.id;
    this.name = countryEntity.name;
    this.code = countryEntity.code;
  }
}

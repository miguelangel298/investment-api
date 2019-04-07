import NationalityEntity from '../../data/entities/NationalityEntity';
import CountryDTO from './CountryDTO';

export default class NationalityDTO {

  id: number;
  name: string;
  countryBy: CountryDTO;

  constructor(nationalityEntity: NationalityEntity) {
    this.id = nationalityEntity.id;
    this.name = nationalityEntity.name;
    this.countryBy = new CountryDTO(nationalityEntity.countryBy);
  }
}

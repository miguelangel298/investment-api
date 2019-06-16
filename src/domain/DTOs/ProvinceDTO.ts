import CountryDTO from './CountryDTO';
import ProvinceEntity from '../../data/entities/ProvinceEntity';

export default class ProvinceDTO {

  id: number;
  name: string;
  code: string;
  country: CountryDTO;

  constructor(protected provinceEntity: ProvinceEntity) {
    this.id = provinceEntity.id;
    this.name = provinceEntity.name;
    this.code = provinceEntity.code;

    if (provinceEntity.country) {
      this.country = new CountryDTO(provinceEntity.country);
    }
  }
}

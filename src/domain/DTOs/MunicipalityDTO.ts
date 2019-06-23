import MunicipalityEntity from '../../data/entities/MunicipalityEntity';
import ProvinceDTO from './ProvinceDTO';

export default class MunicipalityDTO {

  id: number;
  name: string;
  code: string;
  province: ProvinceDTO;

  constructor(protected municipalityEntity: MunicipalityEntity) {
    this.id = municipalityEntity.id;
    this.name = municipalityEntity.name;
    this.code = municipalityEntity.code;
    this.province = new ProvinceDTO(municipalityEntity.province);
  }

}

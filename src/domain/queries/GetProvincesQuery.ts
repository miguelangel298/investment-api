import { IQueryHandler } from './base/IQuery';
import ProvinceDTO from '../DTOs/ProvinceDTO';
import IProvinceRepository from '../../data/repository/ProvinceRepository/IProvinceRepository';

/**
 * Get the list of provinces.
 * @returns { ProvinceDTO[] }
 */
export class GetProvincesQueryHandler implements IQueryHandler<ProvinceDTO[]> {
  constructor(protected provinceRepository: IProvinceRepository) { }

  async handle(): Promise<ProvinceDTO[]> {
    const provinces = await this.provinceRepository.find({});
    return provinces.map(province => new ProvinceDTO(province));
  }

}

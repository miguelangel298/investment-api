import IProvinceRepository from '../../data/repository/ProvinceRepository/IProvinceRepository';
import ProvinceDTO from '../../domain/DTOs/ProvinceDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import { GetProvincesQueryHandler } from '../../domain/queries/GetProvincesQuery';

export default class ProvinceController {
  constructor(protected provinceRepository: IProvinceRepository) { }

  /**
   * Get the list of provinces.
   * @returns { ProvinceDTO[] }
   */
  async index(): Promise<ProvinceDTO[]> {
    try {
      // Instance of query
      const getProvincesQueryHandler = new GetProvincesQueryHandler(this.provinceRepository);
      return await getProvincesQueryHandler.handle();
    } catch (e) {
      throw buildRawError(e);
    }
  }
}

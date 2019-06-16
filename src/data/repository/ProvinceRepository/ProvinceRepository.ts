import { EntityRepository, Repository } from 'typeorm';
import ProvinceEntity from '../../entities/ProvinceEntity';
import IProvinceRepository from './IProvinceRepository';

@EntityRepository(ProvinceEntity)
export default class ProvinceRepository extends Repository<ProvinceEntity>
  implements IProvinceRepository {
}

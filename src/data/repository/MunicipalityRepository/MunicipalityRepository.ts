import { EntityRepository, Repository } from 'typeorm';
import MunicipalityEntity from '../../entities/MunicipalityEntity';
import IMunicipalityRepository from './IMunicipalityRepository';

@EntityRepository(MunicipalityEntity)
export default class MunicipalityRepository extends Repository<MunicipalityEntity>
 implements IMunicipalityRepository {

}

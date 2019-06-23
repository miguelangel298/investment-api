import { Repository } from 'typeorm';
import MunicipalityEntity from '../../entities/MunicipalityEntity';
import IMunicipalityRepository from './IMunicipalityRepository';

export default class MunicipalityRepository extends Repository<MunicipalityEntity>
 implements IMunicipalityRepository {

}

import { EntityRepository, Repository } from 'typeorm';
import AdditionalInformationEntity from '../../entities/AdditionalInformationEntity';
import IAdditionalInformationRepository from './IAdditionalInformationRepository';

@EntityRepository(AdditionalInformationEntity)
export default class AdditionalInformationRepository extends Repository<AdditionalInformationEntity>
 implements IAdditionalInformationRepository {

}

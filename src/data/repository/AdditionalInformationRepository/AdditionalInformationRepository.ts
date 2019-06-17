import { Repository } from 'typeorm';
import AdditionalInformationEntity from '../../entities/AdditionalInformationEntity';
import IAdditionalInformationRepository from './IAdditionalInformationRepository';

export default class AdditionalInformationRepository extends Repository<AdditionalInformationEntity>
 implements IAdditionalInformationRepository {

}

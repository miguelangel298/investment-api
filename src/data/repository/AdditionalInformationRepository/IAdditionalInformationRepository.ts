import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import {
  FindConditions,
  FindOneOptions,
  InsertResult,
  ObjectID,
  SaveOptions,
  UpdateResult,
} from 'typeorm';
import AdditionalInformationEntity from '../../entities/AdditionalInformationEntity';

export default interface IAdditionalInformationRepository {

  insert(entity: QueryDeepPartialEntity<AdditionalInformationEntity>
    | (QueryDeepPartialEntity<AdditionalInformationEntity>[]),
         options?: SaveOptions): Promise<InsertResult>;

  findOne(conditions?: FindConditions<AdditionalInformationEntity>,
          options?: FindOneOptions<AdditionalInformationEntity>):
    Promise<AdditionalInformationEntity | undefined>;

  update(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID |
           ObjectID[] | FindConditions<AdditionalInformationEntity>,
         partialEntity: QueryDeepPartialEntity<AdditionalInformationEntity>,
         options?: SaveOptions): Promise<UpdateResult>;

}

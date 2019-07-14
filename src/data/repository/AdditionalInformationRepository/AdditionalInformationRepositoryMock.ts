import IAdditionalInformationRepository from './IAdditionalInformationRepository';
import { FindConditions, FindOneOptions, InsertResult, SaveOptions, UpdateResult } from 'typeorm';
import AdditionalInformationEntity from '../../entities/AdditionalInformationEntity';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import { ObjectID } from 'typeorm/browser';
import * as faker from 'faker';

export default class AdditionalInformationRepositoryMock
 implements IAdditionalInformationRepository {

  public static entity: AdditionalInformationEntity[] = [{
    id: 1,
    motherName: faker.name.firstName(2),
    fatherName: faker.name.firstName(),
    dependents: faker.random.number(),
    person: { id: 2 },
  } as AdditionalInformationEntity, {
    id: 2,
    motherName: faker.name.firstName(2),
    fatherName: faker.name.firstName(),
    dependents: faker.random.number(),
    person: { id: 1 },
  } as AdditionalInformationEntity,
  ];

  async findOne(conditions?: FindConditions<AdditionalInformationEntity>,
                options?: FindOneOptions<AdditionalInformationEntity>):
    Promise<AdditionalInformationEntity | undefined> {
    return AdditionalInformationRepositoryMock.entity[0];
  }

  async insert(entity: QueryDeepPartialEntity<AdditionalInformationEntity> |
    QueryDeepPartialEntity<AdditionalInformationEntity>[],
               options?: SaveOptions): Promise<InsertResult> {
    return undefined;
  }

  async update(criteria: string | string[] | number | number[] | Date | Date[] |
    ObjectID | ObjectID[] | FindConditions<AdditionalInformationEntity>,
               partialEntity: QueryDeepPartialEntity<AdditionalInformationEntity>,
               options?: SaveOptions): Promise<UpdateResult> {
    return undefined;
  }

}

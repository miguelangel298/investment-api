import IPersonJobRepository from './IPersonJobRepository';
import { FindConditions,
  FindManyOptions,
  FindOneOptions,
  InsertResult,
  ObjectID,
  SaveOptions,
  UpdateResult }
  from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import PersonJobEntity from '../../entities/PersonJobEntity';
import * as faker from 'faker';

export default class PersonJobRepositoryMock implements IPersonJobRepository {

  public static entities: PersonJobEntity[] = [{
    id: 1,
    position: faker.name.jobTitle(),
    supervisorName: faker.name.findName(),
    supervisorPhone: faker.phone.phoneNumber(),
    salary: faker.random.number(),
  } as PersonJobEntity, {
    id: 1,
    position: faker.name.jobTitle(),
    supervisorName: faker.name.findName(),
    supervisorPhone: faker.phone.phoneNumber(),
    salary: faker.random.number(),
  } as PersonJobEntity,
  ];

  async findOne(conditions?: FindConditions<PersonJobEntity>, options?:
    FindOneOptions<PersonJobEntity>): Promise<PersonJobEntity | undefined> {
    return PersonJobRepositoryMock.entities[0];
  }

  async insert(entity: QueryDeepPartialEntity<PersonJobEntity> |
    QueryDeepPartialEntity<PersonJobEntity>[],
               options?: SaveOptions): Promise<InsertResult> {
    return undefined;
  }

  async find(conditions?: FindConditions<PersonJobEntity> | FindManyOptions<PersonJobEntity>):
    Promise<PersonJobEntity[]> {
    return PersonJobRepositoryMock.entities;
  }

  async update(criteria: string | string[] | number | number[] | Date | Date[] | ObjectID |
                 ObjectID[] | FindConditions<PersonJobEntity>,
               partialEntity: QueryDeepPartialEntity<PersonJobEntity>,
               options?: SaveOptions): Promise<UpdateResult> {
    return undefined;
  }

}

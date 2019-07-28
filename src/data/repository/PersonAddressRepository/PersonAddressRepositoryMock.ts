import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import {
  FindConditions, FindManyOptions,
  FindOneOptions,
  InsertResult,
  ObjectID,
  SaveOptions,
  UpdateResult,
} from 'typeorm';
import PersonAddressEntity from '../../entities/PersonAddressEntity';
import IPersonAddressRepository from './IPersonAddressRepository';
import * as faker from 'faker';
import PersonRepositoryMock from '../PersonRepository/PersonRepositoryMock';
import ProvinceRepositoryMock from '../ProvinceRepository/ProvinceRepositoryMock';
import UserRepositoryMock from '../UserRepository/UserRepositoryMock';

export default class PersonAddressRepositoryMock implements IPersonAddressRepository {

  public static entity: PersonAddressEntity[] = [{
    id: 1,
    sector: faker.address.streetName(),
    building: faker.address.cityPrefix(),
    number: faker.address.countryCode(),
    detail: faker.address.secondaryAddress(),
    active: true,
    person: PersonRepositoryMock.entities[0],
    province: ProvinceRepositoryMock.entity[0],
    createdBy: UserRepositoryMock.entities[0],
    updatedBy: UserRepositoryMock.entities[0],
    createdAt: new Date(),
    updatedAt: new Date(),
  }, {
    id: 2,
    sector: faker.address.streetName(),
    building: faker.address.cityPrefix(),
    number: faker.address.countryCode(),
    detail: faker.address.secondaryAddress(),
    active: true,
    person: PersonRepositoryMock.entities[0],
    province: ProvinceRepositoryMock.entity[0],
    createdBy: UserRepositoryMock.entities[0],
    updatedBy: UserRepositoryMock.entities[0],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  ];

  async findOne(conditions?: FindConditions<PersonAddressEntity>, options?:
    FindOneOptions<PersonAddressEntity>): Promise<PersonAddressEntity | undefined> {
    return PersonAddressRepositoryMock.entity[0];
  }

  async insert(entity: QueryDeepPartialEntity<PersonAddressEntity> |
    QueryDeepPartialEntity<PersonAddressEntity>[],
               options?: SaveOptions): Promise<InsertResult> {
    return undefined;
  }

  async update(criteria: string | string[] | number | number[] |
    Date | Date[] | ObjectID | ObjectID[] | FindConditions<PersonAddressEntity>,
               partialEntity: QueryDeepPartialEntity<PersonAddressEntity>, options?:
                 SaveOptions): Promise<UpdateResult> {
    return undefined;
  }

  async find(conditions?: FindConditions<PersonAddressEntity> |
    FindManyOptions<PersonAddressEntity>): Promise<PersonAddressEntity[]> {
    return PersonAddressRepositoryMock.entity;
  }

}

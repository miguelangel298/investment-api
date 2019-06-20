import IPersonRepository from './IPersonRepository';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';
import PersonEntity from '../../entities/PersonEntity';
import { FindConditions, FindOneOptions, InsertResult, SaveOptions } from 'typeorm';

export default class PersonRepositoryMock implements IPersonRepository {

  public static entities: PersonEntity[] = [{
    id: 1,
    names: 'admin',
    cardId: 22800075891,
  } as PersonEntity,
  ];
  async insert(entity: QueryDeepPartialEntity<PersonEntity>
    | QueryDeepPartialEntity<PersonEntity>[],
               options?: SaveOptions): Promise<InsertResult> {
    return undefined;
  }

  async findOne(conditions?: FindConditions<PersonEntity>,
                options?: FindOneOptions<PersonEntity>): Promise<PersonEntity | undefined> {
    return PersonRepositoryMock.entities[0];
  }

}

import { getRepository, ObjectType, Repository } from 'typeorm';
import * as faker from 'faker';

export type FactoryDefineFunction<T> = (faker: Faker.FakerStatic,
                                        factory: FactoryStatic, count?: number) => Promise<T>;
export type FactoryStatic = Map<ObjectType<any>, Factory<any>>;

export default class Factory<T> {
  protected repository: Repository<T>;
  protected mapCallback: (entity: T, count?: number) => Promise<T>;

  constructor(entityClass: ObjectType<T>,
              protected define: FactoryDefineFunction<T>, protected factories: FactoryStatic) {
    this.repository = getRepository<T>(entityClass);
    this.mapCallback = async (entity: T) => entity;
  }

  map(callback: (entity: T) => Promise<T>): Factory<T> {
    this.mapCallback = callback;
    return this;
  }

  createMany = async (times: number): Promise<T[]> => {
    const entities: T[] = [] as T[];
    for (let i = 0; i < times; i += 1) {
      entities.push(await this.create(i));
    }
    return entities;
  }

  create = async (count?: number): Promise<T> => {
    const entity = await this.make(count);
    const result = await this.repository.insert(entity);
    const insertedId = result.identifiers[0].id;
    return await this.repository.findOne(insertedId);
  }

  async make(count?: number): Promise<T> {
    return this.mapCallback(await this.define(faker, this.factories, count), count);
  }
}

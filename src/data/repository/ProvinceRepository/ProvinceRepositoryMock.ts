import IProvinceRepository from './IProvinceRepository';
import ProvinceEntity from '../../entities/ProvinceEntity';
import CountryEntity from '../../entities/CountryEntity';
import { FindConditions, FindOneOptions } from 'typeorm';
import { ObjectID } from 'typeorm/browser';

export default class ProvinceRepositoryMock implements IProvinceRepository {
  public static entity: ProvinceEntity[] = [
    {
      id: 1,
      name: 'Santo Domingo',
      code: 'SD',
      country: { id: 1 } as CountryEntity,
    },
    {
      id: 2,
      name: 'Santiago',
      code: 'S',
      country: { id: 2 } as CountryEntity,

    },
  ];

  async find(conditions?: FindConditions<ProvinceEntity>): Promise<ProvinceEntity[]> {
    return ProvinceRepositoryMock.entity;
  }

  async findOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<ProvinceEntity>):
    Promise<ProvinceEntity | undefined> {
    return ProvinceRepositoryMock.entity[0];
  }

}

import INationalityRepository from './INationalityRepository';
import { ObjectID, FindOneOptions } from 'typeorm';
import NationalityEntity from '../../entities/NationalityEntity';
import CountryRepositoryMock from '../CountryRepository/CountryRepositoryMock';

export default class NationalityRepositoryMock implements INationalityRepository {

  public static entity: NationalityEntity[] = [
    {
      id: 1,
      name: 'Dominican',
      countryBy: CountryRepositoryMock.entity[0],
    },
  ];

  async findOne(id?: string | number | Date | ObjectID, options?:
    FindOneOptions<NationalityEntity>):
    Promise<NationalityEntity | undefined> {
    return NationalityRepositoryMock.entity[0];
  }

}

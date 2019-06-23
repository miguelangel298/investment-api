import IMunicipalityRepository from './IMunicipalityRepository';
import MunicipalityEntity from '../../entities/MunicipalityEntity';
import { FindConditions, FindOneOptions } from 'typeorm';
import { ObjectID } from 'typeorm/browser';
import ProvinceEntity from '../../entities/ProvinceEntity';

export default class MunicipalityRepositoryMock implements IMunicipalityRepository {

  public static entity: MunicipalityEntity[] = [
    {
      id: 1,
      name: 'Pedro Brand',
      code: 'PD',
      province: { id: 1 } as ProvinceEntity,
    },
    {
      id: 2,
      name: 'La Paz',
      code: 'LP',
      province: { id: 2 } as ProvinceEntity,
    },
  ];

  async find(conditions?: FindConditions<MunicipalityEntity>): Promise<MunicipalityEntity[]> {
    return MunicipalityRepositoryMock.entity;
  }

  async findOne(id?: string | number | Date | ObjectID, options?:
    FindOneOptions<MunicipalityEntity>): Promise<MunicipalityEntity | undefined> {
    return MunicipalityRepositoryMock.entity[0];

  }

}

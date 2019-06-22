import IGenderRepository from './IGenderRepository';
import { ObjectID, FindOneOptions, FindConditions } from 'typeorm';
import GenderEntity from '../../entities/GenderEntity';

export default class GenderRepositoryMock implements IGenderRepository {

  public static entity: GenderEntity[] = [
    {
      id: 1,
      name: 'Hombre',
      code: 'M',
    },
    {
      id: 2,
      name: 'Mujer',
      code: 'F',
    },
  ];

  async findOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<GenderEntity>):
    Promise<GenderEntity | undefined> {
    return GenderRepositoryMock.entity[0];
  }

  async find(conditions?: FindConditions<GenderEntity>): Promise<GenderEntity[]> {
    return GenderRepositoryMock.entity;
  }

}

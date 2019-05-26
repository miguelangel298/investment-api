import IGenderRepository from './IGenderRepository';
import { ObjectID, FindOneOptions } from 'typeorm';
import GenderEntity from '../../entities/GenderEntity';

export default class GenderRepositoryMock implements IGenderRepository {

  public static entity: GenderEntity[] = [
    {
      id: 1,
      name: 'Masculino',
      code: 'M',
    },
  ];

  async findOne(id?: string | number | Date | ObjectID, options?: FindOneOptions<GenderEntity>):
    Promise<GenderEntity | undefined> {
    return GenderRepositoryMock.entity[0];
  }
}

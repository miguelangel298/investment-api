import ICivilStatusRepository from './ICivilStatusRepository';
import CivilStatusEntity from '../../entities/CivilStatusEntity';
import { FindConditions } from 'typeorm';

export default class CivilStatusRepositoryMock implements ICivilStatusRepository {

  public static entities: CivilStatusEntity[] = [
    {
      id: 1,
      status: 'Married',
    },
    {
      id: 2,
      status: 'Single',
    },
  ];

  async find(conditions?: FindConditions<CivilStatusEntity>): Promise<CivilStatusEntity[]> {
    return CivilStatusRepositoryMock.entities;
  }

}

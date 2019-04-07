import IGenderRepository from './IGenderRepository';
import GenderEntity from '../../entities/GenderEntity';

export default class GenderRepositoryMock implements IGenderRepository {

  public static entity: GenderEntity[] = [];
}

import IBankRepository from './IBankRepository';
import BankEntity from '../../entities/BankEntity';

export default class BankRepositoryMock implements IBankRepository {

  public static entity: BankEntity[] = [];

}

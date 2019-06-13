import BankEntity from '../../data/entities/BankEntity';

export default class BankDTO {

  name: string;

  constructor(bank: BankEntity) {
    this.name = bank.name;
  }

}

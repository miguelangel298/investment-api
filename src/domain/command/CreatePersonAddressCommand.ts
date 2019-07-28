import { ICommand, ICommandHandler } from './base/ICommand';
import IPersonAddressRepository from
    '../../data/repository/PersonAddressRepository/IPersonAddressRepository';
import PersonAddressEntity from '../../data/entities/PersonAddressEntity';
import PersonEntity from '../../data/entities/PersonEntity';
import ProvinceEntity from '../../data/entities/ProvinceEntity';
import UserEntity from '../../data/entities/UserEntity';

export default interface CreatePersonAddressCommand extends ICommand {
  sector?: string;
  building?: string;
  number?: string;
  detail: string;
  active: boolean;
  person: number;
  province: number;
  createdBy: number;
}

/**
 * This command is for add address to a person.
 * @param { CreatePersonAddressCommand }
 */
export class CreatePersonAddressCommandHandler implements ICommandHandler {
  constructor(protected personAddressRepository: IPersonAddressRepository) { }

  async handle(command: CreatePersonAddressCommand[]): Promise<void> {
    const addresses = command.map((address) => {
      const personAddress = new PersonAddressEntity();
      personAddress.sector = address.sector;
      personAddress.building = address.building;
      personAddress.number = address.number;
      personAddress.detail = address.detail;
      personAddress.active = address.active;
      personAddress.person = new PersonEntity();
      personAddress.person.id = address.person;
      personAddress.province = new ProvinceEntity();
      personAddress.province.id = address.province;
      personAddress.createdBy = new UserEntity();
      personAddress.createdBy.id = address.createdBy;
      personAddress.createdAt = new Date();
      return personAddress;
    });

    await this.personAddressRepository.insert(addresses);
  }

}

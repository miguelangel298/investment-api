import IPersonAddressRepository from
    '../../data/repository/PersonAddressRepository/IPersonAddressRepository';
import PersonAddressDTO from '../../domain/DTOs/PersonAddressDTO';
import CreatePersonAddressCommand, { CreatePersonAddressCommandHandler }
  from '../../domain/command/CreatePersonAddressCommand';
import { buildRawError } from '../../application/config/ErrorCode';
import GetPersonAddressQuery, { GetPersonAddressQueryHandler }
  from '../../domain/queries/GetPersonAddressQuery';

export default class PersonAddressController {
  constructor(protected personAddressRepository: IPersonAddressRepository) { }

  /**
   * This command is for adding addresses to a person.
   * @params { CreatePersonAddressCommand[] }
   * @returns { PersonAddressDTO[] }
   */
  async create(params: CreatePersonAddressCommand[]): Promise<PersonAddressDTO[]> {
    try {
      const createPersonAddressCommandHandler =
        new CreatePersonAddressCommandHandler(this.personAddressRepository);
      await createPersonAddressCommandHandler.handle(params);
      /**
       * We look for the person who adds the address and creates
       * the instance of the query to return all the addresses.
       */
      const getPersonAddress: GetPersonAddressQuery = {
        person: params[0].person,
      };

      const getPersonAddressHandler =
        new GetPersonAddressQueryHandler(this.personAddressRepository);
      return await getPersonAddressHandler.handle(getPersonAddress);
    } catch (e) {
      throw buildRawError(e);
    }
  }
}

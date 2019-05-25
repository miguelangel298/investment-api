import IPersonRepository from '../../data/repository/PersonRepository/IPersonRepository';
import CreatePersonCommand,
{ CreatePersonCommandHandler } from '../../domain/command/CreatePersonCommand';
import PersonDTO from '../../domain/DTOs/PersonDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import GetPersonByCardIdQuery,
{ GetPersonByCardIdQueryHandler } from '../../domain/queries/GetPersonByCardIdQuery';

export default class PersonController {
  constructor(protected personRepository: IPersonRepository) { }

  async create(personCommand: CreatePersonCommand): Promise<PersonDTO> {
    try {
      const createPersonCommandHandler =
        new CreatePersonCommandHandler(this.personRepository);
      await createPersonCommandHandler.handle(personCommand);

      // we look for the person created and we return it
      const query: GetPersonByCardIdQuery = {
        cardID: personCommand.cardId,
      };
      const getPersonByCardIdQueryHandler =
        new GetPersonByCardIdQueryHandler(this.personRepository);
      return await getPersonByCardIdQueryHandler.handle(query);
    } catch (e) {
      throw buildRawError(e);
    }
  }
}

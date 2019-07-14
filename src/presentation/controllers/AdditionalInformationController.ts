import IAdditionalInformationRepository
  from '../../data/repository/AdditionalInformationRepository/IAdditionalInformationRepository';
import AdditionalInformationDTO from '../../domain/DTOs/AdditionalInformationDTO';
import { buildRawError } from '../../application/config/ErrorCode';
import CreateAdditionalInformationCommand
  , { CreateAdditionalInformationCommandHandler }
  from '../../domain/command/CreateAdditionalInformationCommand';
import GetAdditionalInformationQuery,
{ GetAdditionalInformationQueryHandler } from '../../domain/queries/GetAdditionalInformationQuery';

export default class AdditionalInformationController {
  constructor(protected additionalInformationRepository: IAdditionalInformationRepository) { }

  /**
   * This method is for add additional information to a person.
   * All fields are required.
   * @params { CreateAdditionalInformationCommand }
   * @return { AdditionalInformationDTO }
   */
  async create(params: CreateAdditionalInformationCommand): Promise<AdditionalInformationDTO> {
    try {
      // We instanced the command and proceed to add additional information to person.
      const createAdditionalInformationCommandHandler =
        new CreateAdditionalInformationCommandHandler(this.additionalInformationRepository);
      await createAdditionalInformationCommandHandler.handle(params);

      /**
       * We instantiate the query to obtain the additional
       * information of the person.
       */
      const getAdditionalInformationQuery: GetAdditionalInformationQuery = {
        person: params.person,
      };
      const getAdditionalInformationQueryHandler =
        new GetAdditionalInformationQueryHandler(this.additionalInformationRepository);
      return await getAdditionalInformationQueryHandler.handle(getAdditionalInformationQuery);
    } catch (e) {
      throw buildRawError(e);
    }
  }
}

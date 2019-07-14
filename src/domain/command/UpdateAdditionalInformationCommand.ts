import { ICommand, ICommandHandler } from './base/ICommand';
import IAdditionalInformationRepository
  from '../../data/repository/AdditionalInformationRepository/IAdditionalInformationRepository';
import AdditionalInformationEntity from '../../data/entities/AdditionalInformationEntity';
import CivilStatusEntity from '../../data/entities/CivilStatusEntity';
import PersonEntity from '../../data/entities/PersonEntity';

export default interface UpdateAdditionalInformationCommand extends ICommand {
  person: number;
  fatherName: string;
  motherName: string;
  civilStatus: number;
  dependents: number;
}

/**
 * This command is for update additional information to a person.
 * @param { UpdateAdditionalInformationCommand }
 */
export class UpdateAdditionalInformationCommandHandler implements ICommandHandler {
  constructor(protected additionalInformationRepository: IAdditionalInformationRepository) { }

  async handle(command: UpdateAdditionalInformationCommand): Promise<void> {
    const additionalInformation = new AdditionalInformationEntity();
    additionalInformation.motherName = command.motherName;
    additionalInformation.fatherName = command.fatherName;
    additionalInformation.civilStatus = new CivilStatusEntity();
    additionalInformation.civilStatus.id = command.civilStatus;
    additionalInformation.dependents = command.dependents;

    // We perform the update looking for the record of the person.
    const person = new PersonEntity();
    person.id = command.person;
    await this.additionalInformationRepository.update(person, additionalInformation);
  }
}

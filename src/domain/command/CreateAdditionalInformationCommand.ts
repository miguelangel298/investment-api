import { ICommand, ICommandHandler } from './base/ICommand';
import IAdditionalInformationRepository
  from '../../data/repository/AdditionalInformationRepository/IAdditionalInformationRepository';
import AdditionalInformationEntity from '../../data/entities/AdditionalInformationEntity';
import PersonEntity from '../../data/entities/PersonEntity';
import CivilStatusEntity from '../../data/entities/CivilStatusEntity';

export default interface CreateAdditionalInformationCommand extends ICommand {
  fatherName: string;
  motherName: string;
  civilStatus: number;
  dependents: number;
  person: number;
}

/**
 * This command is for addi additional information to a person.
 * All fields are required.
 * @param { CreateAdditionalInformationCommand }
 */
export class CreateAdditionalInformationCommandHandler implements ICommandHandler {
  constructor(protected informationAdditionalRepository: IAdditionalInformationRepository) { }

  async handle(command: CreateAdditionalInformationCommand): Promise<void> {
    const additionalInformation = new AdditionalInformationEntity();
    additionalInformation.motherName = command.motherName;
    additionalInformation.fatherName = command.fatherName;
    additionalInformation.person = new PersonEntity();
    additionalInformation.person.id = command.person;
    additionalInformation.civilStatus = new CivilStatusEntity();
    additionalInformation.civilStatus.id = command.civilStatus;
    additionalInformation.dependents = command.dependents;
    await this.informationAdditionalRepository.insert(additionalInformation);
  }
}

import { ICommand, ICommandHandler } from './base/ICommand';
import GenderEntity from '../../data/entities/GenderEntity';
import NationalityEntity from '../../data/entities/NationalityEntity';
import PersonEntity from '../../data/entities/PersonEntity';
import IPersonRepository from '../../data/repository/PersonRepository/IPersonRepository';

export default interface CreatePersonCommand extends ICommand {
  names: string;
  firstSurname: string;
  secondSurname: string;
  birthDate: Date;
  cardId?: number;
  passport?: string;
  genderBy: number;
  nationalityBy: number;
  createdBy: number;
}

export class CreatePersonCommandHandler implements ICommandHandler {
  constructor(protected personRepository: IPersonRepository) { }

  async handle(command: CreatePersonCommand): Promise<void> {
    const person = new PersonEntity();
    person.names = command.names;
    person.firstSurname = command.firstSurname;
    person.secondSurname = command.secondSurname;
    person.birthDate = command.birthDate;
    person.cardId = command.cardId;
    person.passport = command.passport;
    person.gender = new GenderEntity();
    person.gender.id = command.genderBy;
    person.nationality = new NationalityEntity();
    person.nationality.id = command.nationalityBy;
    person.createdAt = new Date();
    await this.personRepository.insert(person);
  }

}

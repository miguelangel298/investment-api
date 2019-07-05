import { ICommand, ICommandHandler } from './base/ICommand';
import IPersonJobRepository from '../../data/repository/PersonJobRepository/IPersonJobRepository';
import PersonJobEntity from '../../data/entities/PersonJobEntity';
import PersonEntity from '../../data/entities/PersonEntity';
import BranchOfficeEntity from '../../data/entities/BranchOfficeEntity';
import UserEntity from '../../data/entities/UserEntity';

export default interface UpdateJobsToPersonCommand extends ICommand {
  id: number;
  position: string;
  salary: number;
  dateAdmission: Date;
  employeeCode: string;
  supervisorName: string;
  supervisorPhone: string;
  currentJob: boolean;
  person: number;
  branchOffice: number;
  updatedBy: number;
}

/**
 * This command is for update jobs information to a person.
 * @param { UpdateJobsToPersonCommand[] }
 */
export class UpdateJobsToPersonCommandHandler implements ICommandHandler {
  constructor(protected personJobRepository: IPersonJobRepository) {}

  async handle(command: UpdateJobsToPersonCommand[]): Promise<void> {
    command.forEach(async (item) => {
      console.log(item.id);
      const job = new PersonJobEntity();
      job.position = item.position;
      job.salary = item.salary;
      job.dateAdmission = item.dateAdmission;
      job.employeeCode = item.employeeCode;
      job.supervisorName = item.supervisorName;
      job.supervisorPhone = item.supervisorPhone;
      job.currentJob = item.currentJob;
      job.person = new PersonEntity();
      job.person.id = item.person;
      job.branchOffice = new BranchOfficeEntity();
      job.branchOffice.id = item.branchOffice;
      job.updatedBy = new UserEntity();
      job.updatedBy.id = item.updatedBy;
      job.updatedAt = new Date();
      await this.personJobRepository.update(item.id, job);
    });
  }
}

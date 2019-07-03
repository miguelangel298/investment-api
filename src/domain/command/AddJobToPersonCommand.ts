import { ICommand, ICommandHandler } from './base/ICommand';
import IPersonJobRepository from '../../data/repository/PersonJobRepository/IPersonJobRepository';
import PersonJobEntity from '../../data/entities/PersonJobEntity';
import BranchOfficeEntity from '../../data/entities/BranchOfficeEntity';
import PersonEntity from '../../data/entities/PersonEntity';

export interface AddJobToPersonCommand extends ICommand {
  position: string;
  salary: number;
  dateAdmission: Date;
  employeeCode: string;
  supervisorName: string;
  supervisorPhone: string;
  currentJob: boolean;
  person: number;
  branchOffice: number;
  createdBy: number;
}

/**
 * This command is for adding job information to a person.
 * All fields are required.
 * @param { AddJobToPersonCommand[] }
 */
export class AddJobToPersonCommandHandler implements ICommandHandler {
  constructor(protected personJobRepository: IPersonJobRepository) {}

  async handle(params: AddJobToPersonCommand[]): Promise<void> {
    const jobs = params.map((job) => {
      const newJob = new PersonJobEntity();
      newJob.position = job.position;
      newJob.salary = job.salary;
      newJob.currentJob = job.currentJob;
      newJob.supervisorName = job.supervisorName;
      newJob.supervisorPhone = job.supervisorPhone;
      newJob.employeeCode = job.employeeCode;
      newJob.dateAdmission = job.dateAdmission;
      newJob.branchOffice = new BranchOfficeEntity();
      newJob.branchOffice.id = job.branchOffice;
      newJob.person = new PersonEntity();
      newJob.person.id = job.person;
      newJob.createdAt = new Date();
      return newJob;
    });

    await this.personJobRepository.insert(jobs);
  }

}

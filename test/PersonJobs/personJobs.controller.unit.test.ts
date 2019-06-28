import PersonJobController from '../../src/presentation/controllers/PersonJobController';
import IPersonJobRepository from
    '../../src/data/repository/PersonJobRepository/IPersonJobRepository';
import PersonJobRepositoryMock from
    '../../src/data/repository/PersonJobRepository/PersonJobRepositoryMock';
import { AddJobToPersonCommand } from '../../src/domain/command/AddJobToPersonCommand';
import * as faker from 'faker';

let personJobController: PersonJobController;
let personJobRepository: IPersonJobRepository;

describe('PersonJob controller, command and query', () => {

  beforeAll((done) => {
    personJobRepository = new PersonJobRepositoryMock();
    personJobController = new PersonJobController(personJobRepository);
    done();
  });

  it('should add  job information to a person ', async (done) => {
    const newJobs: AddJobToPersonCommand[] = [
      {
        position: faker.name.jobTitle(),
        person: faker.random.number(),
        salary: faker.random.number(),
        dateAdmission: new Date(),
        employeeCode: faker.random.words(),
        supervisorPhone: faker.phone.phoneNumber(),
        supervisorName: faker.name.findName(),
        currentJob: faker.random.boolean(),
        createdBy: faker.random.number(),
        branchOffice: faker.random.number(),
      },
      {
        position: faker.name.jobTitle(),
        person: faker.random.number(),
        salary: faker.random.number(),
        dateAdmission: new Date(),
        employeeCode: faker.random.words(),
        supervisorPhone: faker.phone.phoneNumber(),
        supervisorName: faker.name.findName(),
        currentJob: faker.random.boolean(),
        createdBy: faker.random.number(),
        branchOffice: faker.random.number(),
      },
    ];
    const jobs = await personJobController.create(newJobs);
    console.log(jobs);
    done();
  });
});

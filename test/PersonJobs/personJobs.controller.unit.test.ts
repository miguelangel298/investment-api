import PersonJobController from '../../src/presentation/controllers/PersonJobController';
import IPersonJobRepository from
    '../../src/data/repository/PersonJobRepository/IPersonJobRepository';
import PersonJobRepositoryMock from
    '../../src/data/repository/PersonJobRepository/PersonJobRepositoryMock';
import { AddJobToPersonCommand } from '../../src/domain/command/AddJobToPersonCommand';
import * as faker from 'faker';
import GetPersonJobsQuery from '../../src/domain/queries/GetPersonJobsQuery';

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

    expect(jobs.length).toBeGreaterThan(1);
    expect(jobs[0]).toHaveProperty('id');
    done();
  });

  it('should return jobs list of a person', async () => {
    const query: GetPersonJobsQuery = {
      personId: 1,
    };
    // Getting jobs
    const jobs = await personJobController.show(query);

    expect(jobs.length).toBeGreaterThan(1);
    expect(jobs[0]).toHaveProperty('id');
  });
});

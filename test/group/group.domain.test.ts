import dotenv from 'dotenv';
import DatabaseConnection from '../../src/data/DatabaseConnection';
import GroupRepository from '../../src/data/repository/GroupRepository';
import { getCustomRepository } from 'typeorm';
import { CreateGroupCommand,
  CreateGroupCommandHandler } from '../../src/domain/command/CreateGroupCommand';

dotenv.config();

let groupRepository: GroupRepository;

describe('Group command and query', () => {

  beforeAll(async (done) => {
    await DatabaseConnection.connect();
    groupRepository = getCustomRepository(GroupRepository);
    done();
  });

  it('Create an new group', async () => {
    const createGroupCommandHandler = new CreateGroupCommandHandler(groupRepository);
    const command: CreateGroupCommand = {
      name: 'admin',
      description: 'klk',
      createdBy: 1,
    };
    await createGroupCommandHandler.handle(command);
  });

});

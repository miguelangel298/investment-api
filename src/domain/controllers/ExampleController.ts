import ExampleDTO from '../../domain/DTOs/ExampleDTO';
import { GetExampleByIdQuery } from '../queries/GetExampleByIdQuery';
import { UpdateExampleCommand } from '../command/UpdateExampleCommand';
import CommandModule from '../../application/modules/CommandModule';
import QueryModule  from '../../application/modules/QueryModule';

export default class ExampleController {
  async index() {
    try {
      const users: any[] = [{
        id: 1,
        name: 'miguel',
      }];

      return users;

    } catch (e) {
      return `err ${e}`;
    }

  }

  async single(id: number): Promise<ExampleDTO> {
    const getExampleByIdQuery: GetExampleByIdQuery = { id };
    return QueryModule.getUserByIdQueryHandle().handle(getExampleByIdQuery);
  }

  async update(id: number, name: string): Promise<boolean> {
    const updateExampleCommand: UpdateExampleCommand = { id, name };
    const commandHandler = CommandModule.getUpdateExampleCommandHandler();
    try {
      await commandHandler.handle(updateExampleCommand);
      return true;
    } catch (e) {
      throw e;
    }
  }
}

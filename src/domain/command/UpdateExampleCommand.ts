import ExampleRepository from '../../data/repository/ExampleRepository';

export interface UpdateExampleCommand {
  id: number;
  name: string;
}

export class UpdateExampleCommandHandler {
  constructor(protected exampleRepository: ExampleRepository) {}

  async handle(query: UpdateExampleCommand): Promise<void> {
    console.log(`updating the article by: ${query.id}, new name: ${query.name}`);
    await this.exampleRepository.update(query.id, { name: query.name });
  }
}

import ExampleDTO from '../../domain/DTOs/ExampleDTO';
import ExampleRepository from '../../data/repository/ExampleRepository';

export interface GetExampleByIdQuery {
  id: number;
}

export class GetExampleByIdQueryHandler {
  constructor(protected exampleRepository: ExampleRepository) {}

  async handle(query: GetExampleByIdQuery): Promise<ExampleDTO> {
    const exampleEntity = await this.exampleRepository.getExampleById(query.id);
    return new ExampleDTO(exampleEntity);
  }
}

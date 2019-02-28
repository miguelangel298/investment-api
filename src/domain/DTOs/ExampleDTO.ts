import ExampleEntity from '../../data/entities/ExampleEntity';

export default class ExampleDTO {

  id: number;
  name: string;

  constructor(exampleEntity: ExampleEntity) {
    this.id = exampleEntity.id;
    this.name = exampleEntity.name;
  }

}

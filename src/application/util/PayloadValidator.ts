import { Request } from 'express';

type Validation = {
  message: string;
  property: string;
};

export default class PayloadValidator {

  /**
   * The search is performed in the request with the parameters to validate
   */
  protected validations: Validation[];
  protected req: Request;
  protected invalidProperties: any[];
  protected messages: any[] = [];

  constructor(req: Request) {
    this.req = req;
    this.validations = [];
  }

  validate(params: String[]) {
    this.validations = params.map((item) => {
      return { property: item, message: `${item} is required` } as Validation;
    });
  }

  /**
   * Validate the objects within a specified key.
   */
  getErrorsArray(key: string): string[] {
    this.req.body[key].forEach((item: any) => {
      this.invalidProperties = this.validations
        .filter(e => !(item[e.property]));
      this.invalidProperties.forEach(prop => this.messages.push(prop.message));
    });

    return this.messages.length && this.messages;
  }

  /**
   * Verify that the parameters to be validated { Validate ()  } are in the request.
   */
  getErrors(): string[] {
    this.invalidProperties = this.validations
      .filter(e => !(this.req.body[e.property]
        || this.req.query[e.property]
        || this.req.params[e.property]));
    this.messages = this.invalidProperties.map(prop => prop.message);

    return this.messages.length && this.messages;
  }
}

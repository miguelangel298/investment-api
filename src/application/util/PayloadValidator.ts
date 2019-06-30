import { Request } from 'express';

type Validation = {
  message: string;
  property: string;
};

export default class PayloadValidator {

  protected validations: Validation[];
  protected req: Request;

  constructor(req: Request) {
    this.req = req;
    this.validations = [];
  }

  validate(params: String[]) {
    this.validations = params.map((item) => {
      return { property: item, message: `${item} is required` } as Validation;
    });
  }

  getErrors(key?: string): string[] {
    /**
     * The search is performed in the request with the parameters to validate
     */
    let invalidProperties: any[];
    let messages: any[] = [];

    /**
     * Validate the objects within a specified key.
     */
    if (key) {
      this.req.body[key].forEach((item: any) => {
        invalidProperties = this.validations
          .filter(e => !(item[e.property]));
        invalidProperties.forEach(prop => messages.push(prop.message));
      });
    } else {
      invalidProperties = this.validations
        .filter(e => !(this.req.body[e.property]
          || this.req.query[e.property]
          || this.req.params[e.property]));
      messages = invalidProperties.map(prop => prop.message);
    }
    return messages.length && messages;
  }
}

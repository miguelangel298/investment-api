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

  getErrors(): string[] {
    /**
     * The search is performed in the request with the parameters to validate
     */
    const invalidProperties: any[] = this.validations
      .filter(e => !(this.req.body[e.property] || this.req.query[e.property]
      || this.req.params[e.property]));
    const messages = invalidProperties.map(prop => prop.message);
    return messages.length && messages;
  }
}

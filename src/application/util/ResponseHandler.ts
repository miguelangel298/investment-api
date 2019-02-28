import { Response } from 'express';
import { httpCodes, httpMessages } from '../config/ErrorCode';

type ResponseError = {
  code: number,
  message?: string,
  info?: string | string[],
};

export default class ResponseHandler {

  static sendError(res: Response, error: ResponseError): Response {
    const code = error.code ? error.code : httpCodes.SERVER_ERROR;
    return this.sendResponse(res, code, 'errors', error.info);
  }

  static sendResponse(res: Response, code: number, name?: string, payload?: any): Response {
    if (typeof (code) === 'object') {
      return this.sendError(res, code);
    }

    return res.status(code).json({
      code,
      message: httpMessages[code],
      [name]: payload,
    });
  }
}

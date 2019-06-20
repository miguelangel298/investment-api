import { Request } from 'express';
import { AuthUser } from '../config/TokenConfig';

export interface RequestWithUser extends Request {
  user: AuthUser;
  token: string;
}

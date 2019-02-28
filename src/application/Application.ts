import express, { Router } from 'express';
import BaseMiddleware  from './middlewares/base/BaseMiddleware';
import BaseRouter  from './routes/base/BaseRouter';

export default abstract class Application {

  protected router: Router;
  protected constructor(protected route: string, protected app: express.Application) {
    this.router = Router();
    this.app.use(this.route, this.router);
  }

  protected initialize(): void { }

  protected addMiddleware(midd: BaseMiddleware): void {
    this.router.use(midd.call);
  }

  protected addRouter(router: BaseRouter): void {
    this.router.use(router.route, router.router);
  }
}

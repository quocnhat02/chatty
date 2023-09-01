import express, { Express } from 'express';
import { ServerApplication } from './setupServer';

class Application {
  public initialize(): void {
    const app: Express = express();
    const server: ServerApplication = new ServerApplication(app);
    server.start();
  }
}

const application: Application = new Application();

application.initialize();

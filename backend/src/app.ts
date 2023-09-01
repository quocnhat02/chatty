import express, { Express } from 'express';
import { ServerApplication } from './setupServer';
import databaseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: ServerApplication = new ServerApplication(app);
    server.start();
  }
}

const application: Application = new Application();

application.initialize();

import express, { Express } from 'express';
import { AppServer } from './setupServer';
import databaseConnection from './setupDatabase';

class Application {
  public initialize(): void {
    databaseConnection();
    const app: Express = express();
    const server: AppServer = new AppServer(app);
    server.start();
  }
}

const application: Application = new Application();

application.initialize();

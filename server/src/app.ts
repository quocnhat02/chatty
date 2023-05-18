import { config } from '@root/config';
import express, { Express } from 'express';
import { AppServer } from '@root/setupServer';
import databaseConnection from '@root/setupDatabase';

class Application {
  public initialize(): void {
    this.loadConfig();
    databaseConnection();
    const app: Express = express();
    const server: AppServer = new AppServer(app);
    server.start();
  }

  private loadConfig(): void {
    config.validateConfig();
    config.cloudinaryConfig();
  }
}

const application: Application = new Application();

application.initialize();

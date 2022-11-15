import {
  Application,
  json,
  urlencoded,
  Request,
  Response,
  NextFunction,
} from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import compression from 'compression';
import cookieSession from 'cookie-session';
import HTTP_STATUS from 'http-status-codes';
import 'express-async-errors';

export class ChattyServer {
  private app: Application;

  constructor(app: Application) {
    this.app = app;
  }

  public start(): void {
    this.securityMiddleware(this.app);
    this.standardMiddleware(this.app);
    this.routesMiddleware(this.app);
    this.globalErrorHandler(this.app);
    this.startServer(this.app);
  }

  public securityMiddleware(app: Application): void {
    app.use(
      cookieSession({
        name: 'session',
        keys: ['test1', 'test2'],
        maxAge: 24 * 7 * 3600000,
        secure: false,
      })
    );
    app.use(hpp());
    app.use(helmet());
    app.use(
      cors({
        origin: '*',
        credentials: true,
        optionsSuccessStatus: 200,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      })
    );
  }

  public standardMiddleware(app: Application): void {
    app.use(compression());
    app.use(json({ limit: '50mb' }));
    app.use(urlencoded({ limit: '50mb', extended: true }));
  }

  public routesMiddleware(app: Application): void {}

  public globalErrorHandler(app: Application): void {}

  public startServer(app: Application): void {}

  public createSocketIO(httpServer: http.Server): void {}

  public startHttpServer(httpServer: http.Server): void {}
}

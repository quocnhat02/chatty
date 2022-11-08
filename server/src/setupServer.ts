import {Application, json, urlencoded, Response, Request, NextFunction} from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieSession from 'cookie-session';
import HTTP_STATUS from 'http-status-codes';
import 'express-async-errors';

export class ChattyServer {
    private app:Application;

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

    public securityMiddleware(app: Application): void {}

    public standardMiddleware(app: Application): void {}

    public routesMiddleware(app: Application): void {}

    public globalErrorHandler(app: Application): void {}

    public startServer(app: Application): void {}

    public createSocketIO(httpServer: http.Server): void {}

    public startHttpServer(httpServer: http.Server): void {}

}
import {Application, json, urlencoded, Response, Request, NextFunction} from 'express';
import http from 'http';
import cors from 'cors';
import helmet from 'helmet';
import hpp from 'hpp';
import compression from 'compression';
import cookieSession from 'cookie-session';
import HTTP_STATUS from 'http-status-codes';
import 'express-async-errors';

const SERVER_PORT = 5000;

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

    public securityMiddleware(app: Application): void {
        app.use(
            cookieSession({
                name: 'session',
                keys: ['test1', 'test2'],
                maxAge: 24 * 7 * 3600000,
                secure: false
            })
        );
        app.use(hpp());
        app.use(helmet());
        app.use(cors({
            origin: '*',
            credentials: true,
            optionsSuccessStatus: 200,
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
        }));
    }

    public standardMiddleware(app: Application): void {
        app.use(compression());
        app.use(json({ limit: '50mb' }));
        app.use(urlencoded({ extended: true, limit: '50mb' }));
    }

    public routesMiddleware(app: Application): void {}

    public globalErrorHandler(app: Application): void {}

    public async startServer(app: Application): Promise<void> {}

    public createSocketIO(httpServer: http.Server): void {}

    public startHttpServer(httpServer: http.Server): void {
        httpServer.listen(SERVER_PORT, () => { 
            console.log(`Server running on port ${SERVER_PORT}`); 
        });
    }

}
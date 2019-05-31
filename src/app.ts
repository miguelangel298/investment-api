import express, { NextFunction, Response, Request } from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import MainApplication from './application/MainApplication';

// Load environment variables from .env file, where API keys and passwords are configured
dotenv.config();

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable all CORS Requests
app.use(cors());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.redirect('/api');
});

new MainApplication('/api', app).initialize();

export default app;

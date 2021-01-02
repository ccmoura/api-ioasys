import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import './database/connection';
import routes from './routes';
import errorHandler from './app/middlewares/error-handler';
import rateLimiter from './app/middlewares/rate-limiter';

const app = express();
app.use(cors());
app.use(helmet());

app.use(express.json());

app.use(rateLimiter);

app.use(routes);

app.use(errorHandler);

module.exports = app; // module.exports for run jest

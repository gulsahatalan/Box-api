import express from 'express';

import path from 'path';

// Middlewares
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';

// Routers
import quizsRouter from  './routes/quiz-routes.js';
import enrollmentsRouter from  './routes/enrollment-routes.js';
import wordRouter from  './routes/word-routes.js';
import userRouter from  './routes/player-routes.js';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/quizes', quizsRouter);

app.use('/questions', enrollmentsRouter);
app.use('/words', wordRouter);
app.use('/players', userRouter);

app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("listening on "+port);
});



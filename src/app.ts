import express, { NextFunction,Response,Request } from 'express';
import 'express-async-errors'
import cors from 'cors';
import { routes } from './routes/index.routes';
import CreateConnection from './database';
import 'reflect-metadata';
import Erro from './errors/AppError';
import path from 'path';

const app = express();

app.use(express.json());
app.use(cors());
CreateConnection();

app.use('/files',express.static(path.resolve(__dirname,"..","temp")));

app.use(routes)
app.use(
    (err:Error, request:Request, response:Response, next:NextFunction)=>{
    if(err instanceof Erro){
        return response.status(err.statusCode).json({
            "status":"error: "+err.internalCode,
            "error":err.message
        })
    };

    console.error(err);

    return response.status(500).json({
        "status":"error: 1000",
        "error":"internal server error"
    });

})

export {app}
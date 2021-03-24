import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '@config/auth';
import Erro from '@shared/errors/AppError';

interface TokenPayload{
    email:string,
    name:string,
    permission:string,
    iat:number,
    exp:number,
    sub:string
}

export default function ensureAuthenticated(request:Request,response:Response,next:NextFunction):void {
    const authHeader = request.headers.authorization;
    
    if(!authHeader){
        throw new Erro("JWT token not definided",1005,403);
    }
    //o jwt ira retornar Bearer ajsnijadinijs isso gera umarray com [type,token] mas type nao serve pra nada entao nem coloca ele
    const [,token] = authHeader.split(' ');
    const decode = verify(token,authConfig.jwt.secret);
        
    const {sub,email,name,permission} = decode as TokenPayload;

    request.user = {
        email:email,
        permission:permission,
        name:name,
        id:sub
    }

    return next();

}
import {Router,Request,Response} from 'express';

const routes = Router();

routes.get('/healthz',(req:Request,res:Response)=>{res.json({"status":"running"})});

export {routes};
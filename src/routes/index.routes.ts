import {Router,Request,Response} from 'express';
import { routesSession } from './session.routes';
import { routesUser } from './user.routes';
import ensureAuthenticated from '../middleware/ensureAuthenticated';

const routes = Router();

routes.get('/test/auth',ensureAuthenticated,(req:Request,res:Response)=>{res.json({"status":"autenticated"})});
routes.get('/healthz',(req:Request,res:Response)=>{res.json({"status":"running"})});

routes.use('/user',routesUser);
routes.use('/session',routesSession);

export {routes};
import {Router,Request,Response} from 'express';
import { routesSession } from '@modules/user/infra/http/routes/session.routes';
import { routesUser } from '@modules/user/infra/http/routes/user.routes';
import { routesLocation } from '@modules/localization/infra/http/routes/routesLocation.routes'
import ensureAuthenticated from  '@modules/user/infra/http/middleware/ensureAuthenticated';

const routes = Router();

routes.get('/test/auth',ensureAuthenticated,(req:Request,res:Response)=>{res.json({"status":"autenticated"})});
routes.get('/healthz',(req:Request,res:Response)=>{res.json({"status":"running"})});

routes.use('/user',routesUser);
routes.use('/session',routesSession);

routes.use('/city',routesLocation);


export {routes};
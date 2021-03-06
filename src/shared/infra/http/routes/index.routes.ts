import {Router,Request,Response} from 'express';
import { routesSession } from '@modules/user/infra/http/routes/session.routes';
import { routesUser } from '@modules/user/infra/http/routes/user.routes';
import { routeForgotPassword } from '@modules/user/infra/http/routes/forgotpassword.routes';
import { routesLocation } from '@modules/localization/infra/http/routes/routesLocation.routes';
import { routesPlan } from '@modules/plans/infra/http/plans.routes';
import { routeBilling } from '@modules/billing/infra/http/billings.routes';
import { routesProperty } from '@modules/property/infra/http/property.routes'
import ensureAuthenticated from  '@modules/user/infra/http/middleware/ensureAuthenticated';

const routes = Router();

routes.get('/test/auth',ensureAuthenticated,(req:Request,res:Response)=>{res.json({"status":"autenticated"})});
routes.get('/healthz',(req:Request,res:Response)=>{res.json({"status":"running"})});

routes.use('/user',routesUser);
routes.use('/session',routesSession);
routes.use('/forgotpassword',routeForgotPassword);

routes.use('/city',routesLocation);

routes.use('/plan',routesPlan);

routes.use('/bill',routeBilling);

routes.use('/property',routesProperty)

export {routes};
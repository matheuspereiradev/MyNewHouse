import {Router} from 'express';
import {SessionController} from '@modules/user/controllers/SessionController'

const routesSession = Router();
const session = new SessionController();

routesSession.post('/',session.create);


export {routesSession};
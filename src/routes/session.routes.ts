import {Router} from 'express';
import {SessionController} from '../controllers/SessionController'

const routesSession = Router();
const session = new SessionController();

routesSession.post('/',session.create);


export {routesSession};
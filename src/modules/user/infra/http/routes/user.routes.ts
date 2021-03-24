import {Router,Request,Response} from 'express';
import { UserController } from '@modules/user/controllers/UserController';

const routesUser = Router();

const userController = new UserController();

routesUser.get('/',userController.show);
routesUser.post('/',userController.create);


export {routesUser};
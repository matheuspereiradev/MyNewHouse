import {Router,Request,Response} from 'express';
import { UserController } from '../controllers/UserController';

const routesUser = Router();

const userController = new UserController();

//routesUser.get('/all',userController.show);
routesUser.post('/',userController.create);


export {routesUser};
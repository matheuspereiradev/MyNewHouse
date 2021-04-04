import {Router,Request,Response} from 'express';
import { UserController } from '@modules/user/controllers/UserController';
import {PasswordController} from '@modules/user/controllers/PasswordController';

const routesUser = Router();

const userController = new UserController();
const passwordController = new PasswordController();

routesUser.get('/',userController.show);
routesUser.post('/',userController.create);
routesUser.patch('/forgotpassword',passwordController.recoveryPassword)


export {routesUser};
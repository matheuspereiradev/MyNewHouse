import {Router,Request,Response} from 'express';
import { UserController } from '@modules/user/controllers/UserController';
import {PasswordController} from '@modules/user/controllers/PasswordController';
import configUp from '@config/multer'
import multer from 'multer';

const routesUser = Router();

const userController = new UserController();
const mult = multer(configUp)

routesUser.get('/',userController.show);
routesUser.post('/',mult.single('avatar'),userController.create);


export {routesUser};
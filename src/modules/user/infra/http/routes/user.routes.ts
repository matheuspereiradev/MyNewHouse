import {Router,Request,Response} from 'express';
import { UserController } from '@modules/user/controllers/UserController';
import configUp from '@config/multer'
import multer from 'multer';

const routesUser = Router();

const userController = new UserController();
const uploadFile = multer(configUp)

routesUser.get('/',userController.show);
routesUser.post('/',uploadFile.single('avatar'),userController.create);


export {routesUser};
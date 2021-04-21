import {Router,Request,Response} from 'express';
import { UserController } from '@modules/user/controllers/UserController';
import configUp from '@config/multer'
import multer from 'multer';
import { celebrate, Joi, Segments } from 'celebrate';
import ensureAuthenticated from  '@modules/user/infra/http/middleware/ensureAuthenticated';

const routesUser = Router();

const userController = new UserController();
const uploadFile = multer(configUp)

routesUser.get('/',userController.show);
routesUser.post('/',celebrate({
    [Segments.BODY]:{
        name:Joi.string().required().max(100),
        surname:Joi.string().required(),
        email:Joi.string().email().required(),
        birthDate:Joi.date().required(),
        password:Joi.string().required(),
        gender:Joi.string().max(1),//.(["M","F","m","f"]),
        street:Joi.string(),
        cpf:Joi.string(),
        cnpj:Joi.string(),
        district:Joi.string(),
        complement:Joi.string(),
        reference:Joi.string(),
        income:Joi.number(),
        phoneNumber:Joi.string(),
        phoneNumber2:Joi.string(),
        idCity:Joi.number()
    }
}),uploadFile.single('avatar'),userController.create);
routesUser.patch('/avatar',ensureAuthenticated,uploadFile.single('avatar'),userController.changeAvatar);
routesUser.delete('/',ensureAuthenticated,userController.delete);
routesUser.patch('/inactivate_account',ensureAuthenticated,userController.inactivate);

export {routesUser};
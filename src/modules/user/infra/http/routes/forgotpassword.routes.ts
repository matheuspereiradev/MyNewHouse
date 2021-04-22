import {Router,Request,Response} from 'express';
import {PasswordController} from '@modules/user/controllers/PasswordController';
import { celebrate, Segments, Joi } from 'celebrate';

const routeForgotPassword = Router();

const passwordController = new PasswordController();

routeForgotPassword.patch('/sendmail/:email',celebrate({
    [Segments.BODY]:{
        email:Joi.string().required().email()
    }   
}),passwordController.recoveryPassword);
routeForgotPassword.patch('/changepassword',passwordController.changePassword)


export {routeForgotPassword};
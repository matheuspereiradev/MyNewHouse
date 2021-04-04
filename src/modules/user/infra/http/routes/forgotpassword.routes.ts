import {Router,Request,Response} from 'express';
import {PasswordController} from '@modules/user/controllers/PasswordController';

const routeForgotPassword = Router();

const passwordController = new PasswordController();

routeForgotPassword.patch('/sendmail',passwordController.recoveryPassword);
routeForgotPassword.patch('/changepassword',passwordController.changePassword)


export {routeForgotPassword};
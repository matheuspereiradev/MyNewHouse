import {Router} from 'express';
import { PlanController } from '@modules/plans/controllers/PlanController';
import { celebrate, Joi, Segments } from 'celebrate';

const routesPlan = Router();

const planController = new PlanController();

routesPlan.get('/',planController.show);
routesPlan.get('/:id',celebrate({
    [Segments.PARAMS]:{
        id:Joi.number()
    }
}),planController.find);
//routesPlan.post('/',userController.create);


export {routesPlan};
import {Router} from 'express';
import { PlanController } from '@modules/plans/controllers/PlanController';

const routesPlan = Router();

const planController = new PlanController();

routesPlan.get('/',planController.show);
//routesPlan.post('/',userController.create);


export {routesPlan};
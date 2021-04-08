import {Router} from "express";
import {BillingController} from "@modules/billing/controllers/BillingController";
import ensureAuthenticated from  '@modules/user/infra/http/middleware/ensureAuthenticated';

const routeBilling = Router();
const billController = new BillingController();

routeBilling.get('/',ensureAuthenticated,billController.show);

export {routeBilling}
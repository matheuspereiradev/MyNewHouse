import {Router} from "express";
import {ChargesCreditCardController} from "@modules/charges/controllers/ChargesCreditCardController";
import ensureAuthenticated from  '@modules/user/infra/http/middleware/ensureAuthenticated';

const routeCharge = Router();
const creditCardController = new ChargesCreditCardController();

routeCharge.post('/credit_card',ensureAuthenticated,creditCardController.create);

export {routeCharge}
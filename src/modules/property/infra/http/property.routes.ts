import {Router} from 'express';
import {PropertyController} from '@modules/property/controllers/PropertyController';
import ensureAuthenticated from  '@modules/user/infra/http/middleware/ensureAuthenticated';

const routesProperty = Router();
const propertyController = new PropertyController();

routesProperty.get('/',propertyController.index);
routesProperty.get('/:id',propertyController.findByID); 
routesProperty.post('/',ensureAuthenticated,propertyController.create);

export {routesProperty};
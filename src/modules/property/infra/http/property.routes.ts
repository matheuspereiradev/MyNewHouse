import {Router} from 'express';
import {PropertyController} from '@modules/property/controllers/PropertyController';
import ensureAuthenticated from  '@modules/user/infra/http/middleware/ensureAuthenticated';

const routesProperty = Router();
const propertyController = new PropertyController();

routesProperty.get('/',propertyController.index);
routesProperty.get('/:id',propertyController.findByID); 
routesProperty.get('/user/:slug',propertyController.findBySlug); 
routesProperty.post('/',ensureAuthenticated,propertyController.create);
routesProperty.delete('/:id',ensureAuthenticated,propertyController.delete);

export {routesProperty};
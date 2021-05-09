import {Router} from 'express';
import {PropertyController} from '@modules/property/controllers/PropertyController';
import ensureAuthenticated from  '@modules/user/infra/http/middleware/ensureAuthenticated';
import { routesPropertyType } from './propertyType.routes';
import { PropertyTypeController } from '@modules/property/controllers/PropertyTypeController';

const routesProperty = Router();
const propertyController = new PropertyController();
const propertyTypeController = new PropertyTypeController();

routesProperty.get('/',propertyController.index);
routesProperty.get('/find/:id',propertyController.findByID); 
routesProperty.get('/user/:slug',propertyController.findBySlug); 
routesProperty.post('/',ensureAuthenticated,propertyController.create);
routesProperty.delete('/:id',ensureAuthenticated,propertyController.delete);
routesProperty.put('/',ensureAuthenticated,propertyController.update)

//routesProperty.get('/types/',propertyTypeController.index);
routesProperty.use('/types',routesPropertyType)

export {routesProperty};
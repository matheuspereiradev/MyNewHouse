import {Router} from 'express';
import {PropertyController} from '@modules/property/controllers/PropertyController'

const routesProperty = Router();
const propertyController = new PropertyController();

routesProperty.get('/',propertyController.index);
routesProperty.get('/:id',propertyController.findByID); 

export {routesProperty};
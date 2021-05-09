import {Router} from 'express';
import { PropertyTypeController } from '@modules/property/controllers/PropertyTypeController';

const routesPropertyType = Router();
const propertyTypeController = new PropertyTypeController();

routesPropertyType.get('/',propertyTypeController.index);

export {routesPropertyType};
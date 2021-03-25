import {Router,Request,Response} from 'express';
import {CityController} from '@modules/localization/controllers/ControllerCity'

const routesLocation = Router();
const controllerCity = new CityController();

routesLocation.get('/',controllerCity.index);
routesLocation.get('/:state',controllerCity.show);

export {routesLocation};
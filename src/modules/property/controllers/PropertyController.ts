import { Request, Response } from 'express';
import {PropertyRepository} from '@modules/property/infra/typeorm/repositories/PropertyRepository'

class PropertyController {

    async index(request: Request, response: Response) {
        const propertyRepository = new PropertyRepository();
        
        const result = await propertyRepository.findAll();

        return response.status(200).json(result);
    }

    // async show(request: Request, response: Response) {
    //     const {state} = request.params;
    //     const cityRepository = new CityRepository();
        
    //     const result = await cityRepository.findByUF(state);

    //     return response.status(200).json(result);
    // }
};

export { PropertyController };
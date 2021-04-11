import { Request, Response } from 'express';
import {PropertyRepository} from '@modules/property/infra/typeorm/repositories/PropertyRepository'

class PropertyController {

    async index(request: Request, response: Response) {
        const propertyRepository = new PropertyRepository();
        
        const result = await propertyRepository.findAll();

        return response.status(200).json(result);
    }

    async findByID(request: Request, response: Response) {
        let {id} = request.params;

        const propertyRepository = new PropertyRepository();
        
        const result = await propertyRepository.findByID(id);

        return response.status(200).json(result);
    }
};

export { PropertyController };
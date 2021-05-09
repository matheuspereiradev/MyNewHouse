import { Request, Response } from 'express';
import { PropertyTypeRepository } from '../infra/typeorm/repositories/PropertyTypeRepository';

class PropertyTypeController {

    async index(request: Request, response: Response) {
        const propertyTypeRepository = new PropertyTypeRepository();
        console.log(1)
        const result = await propertyTypeRepository.findAll();

        return response.status(200).json(result);
    }

};

export { PropertyTypeController };
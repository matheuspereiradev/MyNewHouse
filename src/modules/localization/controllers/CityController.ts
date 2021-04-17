import { Request, Response } from 'express';
import {CityRepository} from '@modules/localization/infra/typeorm/repositories/CityRepository'

class CityController {

    async index(request: Request, response: Response) {
        const cityRepository = new CityRepository();
        
        const result = await cityRepository.findAll();

        return response.status(200).json(result);
    }

    async show(request: Request, response: Response) {
        const {state} = request.params;
        const cityRepository = new CityRepository();
        
        const result = await cityRepository.findByUF(state);

        return response.status(200).json(result);
    }
};

export { CityController };
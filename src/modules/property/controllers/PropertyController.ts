import { Request, Response } from 'express';
import {PropertyRepository} from '@modules/property/infra/typeorm/repositories/PropertyRepository';
import { container } from 'tsyringe';
import { CreatePropertyService } from '../services/CreatePropertyService';

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

    async create(request: Request, response: Response){
        const {street,houseNumber,district,complement,idCity,idContractType,idPropertyType,amountValue,isFinancing,latitude,longitude,amountBathroom,amountBedroom,amountParking,hasPool,note,length,width} = request.body;
        
        const createPropertyService = container.resolve(CreatePropertyService);

        const property = await createPropertyService.execute({street,houseNumber,district,complement,idCity,idAdvertiser:request.user.id,idContractType,idPropertyType,amountValue,isFinancing,latitude,longitude,amountBathroom,amountBedroom,amountParking,hasPool,note,length,width});

        return response.status(201).json(property);
    }
    
};

export { PropertyController };
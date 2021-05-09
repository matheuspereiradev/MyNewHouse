import { getRepository, Repository } from 'typeorm';
import { PropertyType } from '../entities/PropertyType';
import IPropertyTypeRepository from '@modules/property/IRepositories/IPropertyTypeRepository';

class PropertyTypeRepository implements IPropertyTypeRepository{

    private ormRepository:Repository<PropertyType>;

    constructor(){
        this.ormRepository = getRepository(PropertyType)
    }

    public async findAll():Promise<Array<PropertyType>>{
        const all = await this.ormRepository.find();
        console.log(all)
        return all;
    }

}

export {PropertyTypeRepository}
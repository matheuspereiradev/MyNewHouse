import { getRepository, Repository } from 'typeorm';
import IPropertyRepository from '@modules/property/IRepositories/IPropertyRepository';
import { Property } from '../entities/Property';

class PropertyRepository implements IPropertyRepository{

    private ormRepository:Repository<Property>;

    constructor(){
        this.ormRepository = getRepository(Property)
    }

    public async findAll():Promise<Array<Property>>{
        const all = await this.ormRepository.find({relations:["city","advertiser","contractType","propertyType"]});
        return all;
    }

    public async findByID(id:string):Promise<Property>{
        const result = await this.ormRepository.findOne({id});
        return result;
    }

    public async findByAdvertiser(userId:string):Promise<Array<Property>>{
        const all = await this.ormRepository.find({where:[{idAdvertiser:userId}]});
        return all;
    }

}

export {PropertyRepository}
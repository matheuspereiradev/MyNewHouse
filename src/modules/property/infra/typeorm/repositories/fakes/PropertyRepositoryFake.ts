import { getRepository, Repository } from 'typeorm';
import IPropertyRepository from '@modules/property/IRepositories/IPropertyRepository';
import { Property } from '@modules/property/infra/typeorm/entities/Property';
import ICreatePropertyDTO from '@modules/property/dtos/ICreatePropertyDTO';

class PropertyRepositoryFake implements IPropertyRepository{

    private properties:Property[] = [];

    public async findAll():Promise<Array<Property>>{
        return this.properties;
    }

    public async findByID(id:string):Promise<Property>{
        const result = this.properties.find(prop=>prop.id === id)
        return result;
    }

    public async findByAdvertiser(userSlug:string):Promise<Array<Property>>{
        /*const all = await this.ormRepository.();
        return all;*/
        return null
    }

    public async create(data:ICreatePropertyDTO):Promise<Property>{
        
        const property = new Property();

        Object.assign(property,data);

        this.properties.push(property);

        return property;
    }

    public async countUserProperties(idUser:string):Promise<number>{
        const count = 2;
        return count;
    }

    public async delete(id:string):Promise<Property>{
        const index = this.properties.findIndex(prop=>prop.id === id);
        const prop = this.properties[index];
        this.properties.splice(index,1)
        return prop;
    }
}

export {PropertyRepositoryFake}
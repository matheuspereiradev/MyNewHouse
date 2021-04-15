import { getRepository, Repository } from 'typeorm';
import IPropertyRepository from '@modules/property/IRepositories/IPropertyRepository';
import { Property } from '@modules/property/infra/typeorm/entities/Property';
import ICreatePropertyDTO from '@modules/property/dtos/ICreatePropertyDTO';

class PropertyRepositoryFake implements IPropertyRepository{

    private properties:Property[] = [];

    constructor(){
        const property = new Property();

        const data = {
            id:"66982f1c-61c9-4e96-86c3-65b806c4cd73",
            amountBathroom:1,
            amountBedroom:2,
            amountParking:1,
            amountValue:1200,
            complement:"nha",
            created_at:new Date(),
            deleted_at:null,
            district:"Bairro teste",
            hasPool:false,
            houseNumber:100,
            idAdvertiser:"b5fb27c4-c5f7-4fc1-a56f-984007d65e79",
            idCity:1,
            idContractType:1,
            idPropertyType:1,
            isFinancing:false,
            latitude:-123456,
            longitude:876543,
            length:12,
            width:15,
            street:"Rua teste",
            note:"nenhuma",

        }
        Object.assign(property,data);
        this.properties.push(property)
    }

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

    public async update(data:Property):Promise<Property>{
        const index = this.properties.findIndex(prop=>prop.id === data.id);
        const prop = this.properties[index];
        this.properties.splice(index,1)
        return prop;
    }
}

export {PropertyRepositoryFake}
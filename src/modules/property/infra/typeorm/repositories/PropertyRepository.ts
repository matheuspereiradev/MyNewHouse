import { getRepository, Repository } from 'typeorm';
import IPropertyRepository from '@modules/property/IRepositories/IPropertyRepository';
import { Property } from '../entities/Property';
import ICreatePropertyDTO from '@modules/property/dtos/ICreatePropertyDTO';
import { User } from '@modules/user/infra/typeorm/entities/User';
import IUpdatePropertyDTO from '@modules/property/dtos/IUpdatePropertyDTO';

class PropertyRepository implements IPropertyRepository{

    private ormRepository:Repository<Property>;
    private userRepository:Repository<User>;

    constructor(){
        this.ormRepository = getRepository(Property)
        this.userRepository = getRepository(User)
    }

    public async findAll():Promise<Array<Property>>{
        const all = await this.ormRepository.find({relations:["city","advertiser","contractType","propertyType"]});
        return all;
    }

    public async findByID(id:string):Promise<Property>{
        const result = await this.ormRepository.findOne({relations: ["city","advertiser","contractType","propertyType"], where:{id}});
        return result;
    }

    public async findByAdvertiser(userSlug:string):Promise<Array<Property>>{
        const userid = await this.userRepository.findOne({where:{slug:userSlug}});
        const property = await this.ormRepository.find({where:{idAdvertiser:userid}})
        return property
    }

    public async create(data:ICreatePropertyDTO):Promise<Property>{
        
        const property = this.ormRepository.create(data);

        await this.ormRepository.save(property);

        return property;
    }

    public async countUserProperties(idUser:string):Promise<number>{
        const count = await this.ormRepository.count({where:[{idAdvertiser:idUser}]})
        return count;
    }

    public async delete(id:string):Promise<Property>{
        const property = await this.ormRepository.findOne({where:[{id:id}]});
        await this.ormRepository.softDelete({id});
        return property;
    }

    public async update(data:IUpdatePropertyDTO):Promise<Property>{
        const property = await this.ormRepository.findOne({where:[{id:data.id}]});

        property.complement = data.complement;
        property.hasPool = data.hasPool;
        property.houseNumber = data.houseNumber;
        property.idCity = data.idCity;
        property.idContractType = data.idContractType;
        property.idPropertyType = data.idPropertyType;
        property.isFinancing = data.isFinancing;
        property.latitude =data.latitude;
        property.longitude = data.longitude;
        property.length = data.length;
        property.amountBathroom = data.amountBathroom;
        property.amountBedroom = data.amountBedroom;
        property.amountParking = data.amountParking;
        property.amountValue = data.amountValue;
        property.district = data.district;
        property.note = data.note;
        property.street = data.street;
        property.width = data.width;

        await this.ormRepository.save(data);
        return property;
    }
}

export {PropertyRepository}
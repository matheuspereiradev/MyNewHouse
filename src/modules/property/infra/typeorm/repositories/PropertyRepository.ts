import { getRepository, Repository } from 'typeorm';
import IPropertyRepository from '@modules/property/IRepositories/IPropertyRepository';
import { Property } from '../entities/Property';
import ICreatePropertyDTO from '@modules/property/dtos/ICreatePropertyDTO';
import { User } from '@modules/user/infra/typeorm/entities/User';

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
        console.log(userSlug);
        console.log(userid)
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

    public async update(data:Property):Promise<Property>{
        const property = await this.ormRepository.findOne({where:[{id:data.id}]});
        await this.ormRepository.save(data);
        return property;
    }
}

export {PropertyRepository}
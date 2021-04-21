import { Property } from '@modules/property/infra/typeorm/entities/Property';
import ICreatePropertyDTO from '../dtos/ICreatePropertyDTO';
import IUpdatePropertyDTO from '../dtos/IUpdatePropertyDTO';

export default interface IPropertyRepository{
    findAll():Promise<Array<Property>>;
    findByID(id:string):Promise<Property>;
    findByAdvertiser(userID:string):Promise<Array<Property>>;
    countUserProperties(idUser:string):Promise<number>;
    create(data:ICreatePropertyDTO):Promise<Property>;
    delete(id:string):Promise<Property>;
    update(data:IUpdatePropertyDTO):Promise<Property>;
}
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
    /*
    findByEmail(email:string):Promise<User>;
    findByID(id:string):Promise<User>;
    findByCPF(cpf:string):Promise<User>;
    findByCNPJ(cnpj:string):Promise<User>;
    findAll():Promise<Array<User>>;
    patchPassword(id:string,password:string):Promise<User>;
    saveUpdate(user:User):Promise<User>;*/
}
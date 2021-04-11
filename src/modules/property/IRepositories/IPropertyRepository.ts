import { Property } from '@modules/property/infra/typeorm/entities/Property';
import ICreatePropertyDTO from '../dtos/ICreatePropertyDTO';

export default interface IPropertyRepository{
    findAll():Promise<Array<Property>>;
    findByID(id:string):Promise<Property>;
    findByAdvertiser(userID:string):Promise<Array<Property>>;
    create(data:ICreatePropertyDTO):Promise<Property>;
    /*
    findByEmail(email:string):Promise<User>;
    findByID(id:string):Promise<User>;
    findByCPF(cpf:string):Promise<User>;
    findByCNPJ(cnpj:string):Promise<User>;
    findAll():Promise<Array<User>>;
    patchPassword(id:string,password:string):Promise<User>;
    saveUpdate(user:User):Promise<User>;*/
}
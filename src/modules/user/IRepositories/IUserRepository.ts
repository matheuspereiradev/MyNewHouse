import { User } from '@modules/user/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';

export default interface IUserRepository{
    create(data:ICreateUserDTO):Promise<User>;
    findByEmail(email:string):Promise<User>;
    findByID(id:string):Promise<User>;
    findAll():Promise<Array<User>>;
}
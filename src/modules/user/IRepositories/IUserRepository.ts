import { User } from '@modules/user/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';

export default interface IUserRepository{
    create(data:ICreateUserDTO):Promise<User>;
    findByEmail(email:string):Promise<Array<User>>;
    findByID(id:string):Promise<Array<User>>;
    findAll():Promise<Array<User>>;
}
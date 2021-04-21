import { User } from '@modules/user/infra/typeorm/entities/User';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/user/dtos/IUpdateUserDTO'

export default interface IUserRepository{
    create(data:ICreateUserDTO):Promise<User>;
    findByEmail(email:string):Promise<User>;
    findByID(id:string):Promise<User>;
    findByCPF(cpf:string):Promise<User>;
    findByCNPJ(cnpj:string):Promise<User>;
    findAll():Promise<Array<User>>;
    patchPassword(id:string,password:string):Promise<User>;
    savePatch(user:User):Promise<User>; //salva o update de algum user
    update(data:IUpdateUserDTO):Promise<User>;//atualzia tds asinformaçoes
    changeAvatar(idUser:string, avatar:string):Promise<User>;
    delete(idUser:string):Promise<User>;
    inactivate(idUser:string):Promise<User>;
}
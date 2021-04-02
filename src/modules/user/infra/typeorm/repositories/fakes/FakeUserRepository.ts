import {User} from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import { v4 as uuid } from 'uuid'

class FakeUserRepository implements IUserRepository{

    private users:User [] = [];

    public async create({name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity}:ICreateUserDTO):Promise<User>{
        const user =  new User(); 

        Object.assign(user,{name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity})
        
        this.users.push(user)

        return user;
    }

    public async findByEmail(email:string):Promise<User>{ 
               
        const foundUser = this.users.find(usr => usr.email === email,);

        return foundUser;
    };

    public async findByID(id:string):Promise<User>{
        const all = this.users.find(usr=>{
            usr.id === id
        })
        return all;
    };
    public async findAll():Promise<Array<User>>{
        return this.users;
    }

    public async findByCPF(cpf:string):Promise<User>{ 
               
        const foundUser = this.users.find(usr => usr.cpf === cpf);

        return foundUser;
    };

    public async findByCNPJ(cnpj:string):Promise<User>{ 
               
        const foundUser = this.users.find(usr => usr.cnpj === cnpj);

        return foundUser;
    };

}

export {FakeUserRepository}
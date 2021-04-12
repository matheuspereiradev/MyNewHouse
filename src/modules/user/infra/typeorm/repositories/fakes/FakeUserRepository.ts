import {User} from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import { v4 as uuid } from 'uuid'

class FakeUserRepository implements IUserRepository{

    private users:User [] = [];

    constructor(){
        const user =  new User(); 

        Object.assign(user,{id:"85879990-4d56-46c6-8c71-7b7b8d084e62",name:"usuário padrão",surname:"de teste", email:"teste@teste.com", birthDate:new Date(), password:"123hashed", cpf:"12102545067", cnpj:"", street:"teste", houseNumber:1, district:"teste", complement:"teste", reference:"teste", income:100, phoneNumber:"924470", phoneNumber2:"234567", idCity:1})
        
        this.users.push(user)
    }

    public async create({name,surname, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity}:ICreateUserDTO):Promise<User>{
        const user =  new User(); 

        Object.assign(user,{name,surname, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity})
        
        this.users.push(user)

        return user;
    }

    public async patchPassword(id:string,password:string):Promise<User>{
        
        const index =  this.users.findIndex(usr=>usr.id === id)

        const user = this.users[index];
        
        user.password = password;

        this.users.splice(index,1,user)
        return user;       
    }

    public async saveUpdate(user:User):Promise<User>{
        const index =  this.users.findIndex(usr=>usr.id === user.id)

        this.users.splice(index,1,user)

        return user;    
    }

    public async findByEmail(email:string):Promise<User>{ 
               
        const foundUser = this.users.find(usr => usr.email === email,);

        return foundUser;
    };

    public async findByID(id:string):Promise<User>{
        const all = await this.users.find(usr=> usr.id === id)
        return all;
    };
    public async findAll():Promise<Array<User>>{
        return this.users;

    }

    public async findByCPF(cpf:string):Promise<User>{ 
        const foundUser = this.users.find(usr => usr.cpf === cpf,);
        return foundUser;
    };

    public async findByCNPJ(cnpj:string):Promise<User>{ 
               
        const foundUser = this.users.find(usr => usr.cnpj === cnpj,);

        return foundUser;
    };

}

export {FakeUserRepository}
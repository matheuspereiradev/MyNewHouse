
import { getRepository, Repository } from 'typeorm';
import {User} from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';

class UserRepository implements IUserRepository{

    private ormRepository:Repository<User>;

    constructor(){
        this.ormRepository = getRepository(User)
    }

    public async create({name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity}:ICreateUserDTO):Promise<User>{
        const user =  this.ormRepository.create({name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity});

        await this.ormRepository.save(user);

        return user;
    }

    public async findByEmail(email:string):Promise<User>{
        const all = await this.ormRepository.findOne({relations: ["city"],where: {email}});
        return all;
    };

    public async findByID(id:string):Promise<User>{
        const all = await this.ormRepository.findOne({relations: ["city"], where: {id}});
        return all;
    };
    public async findAll():Promise<Array<User>>{
        const all = await this.ormRepository.find({relations: ["city"]});
        return all;
    }

    public async findByCNPJ(cnpj:string):Promise<User>{
        const all = await this.ormRepository.findOne({relations: ["city"], where:{cnpj}});
        return all;
    }

    public async findByCPF(cpf:string):Promise<User>{
        const all = await this.ormRepository.findOne({relations: ["city"], where:{cpf}});
        return all;
    }

}

export {UserRepository}
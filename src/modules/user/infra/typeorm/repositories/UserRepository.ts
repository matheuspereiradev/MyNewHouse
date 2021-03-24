
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

}

export {UserRepository}
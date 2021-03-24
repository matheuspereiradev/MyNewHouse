import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { CreateUserService } from '@modules/user/services/CreateUserService';
import {UserRepository} from '@modules/user/infra/typeorm/repositories/UserRepository'

class UserController {

    async show(request: Request, response: Response) {

        const userRepository = getRepository(User);
        const all = await userRepository.find({
            relations: ["city"]
        });

        return response.status(200).json(all);
    }

    async create(request: Request, response: Response) {
        const { name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity } = request.body;
        
        const userRepository = new UserRepository();
        

        const createUser = new CreateUserService(userRepository);
        console.log('c');
        const user = await createUser.execute({name,email,birthDate,password,cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity})

        return response.status(201).json(user);

    }

};

export { UserController };
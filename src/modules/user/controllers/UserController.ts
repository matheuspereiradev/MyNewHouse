import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { CreateUserService } from '@modules/user/services/CreateUserService';
import {UserRepository} from '@modules/user/infra/typeorm/repositories/UserRepository'

class UserController {

    async show(request: Request, response: Response) {

        const userRepository = new UserRepository();
        const all = await userRepository.findAll();

        return response.status(200).json(all);
    }

    async create(request: Request, response: Response) {
        const { name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity } = request.body;
        
        const userRepository = new UserRepository();

        const createUser = new CreateUserService(userRepository);

        const user = await createUser.execute({name,email,birthDate,password,cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity})

        return response.status(201).json(user);

    }

};

export { UserController };
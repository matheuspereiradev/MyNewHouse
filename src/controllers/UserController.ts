import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Erro from '../errors/AppError';
import { User } from '../models/entities/User';
import { CreateUserService } from '../services/CreateUserService';

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
        
        const createUser = new CreateUserService();
        
        const user = await createUser.execute({name,email,birthDate,password,cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity})

        return response.status(201).json(user);

    }

};

export { UserController };
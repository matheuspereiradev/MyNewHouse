import { Request, Response } from 'express';
import Erro from '../errors/AppError';
import { CreateUserService } from '../services/CreateUserService';

class UserController {

    async show(request: Request, response: Response) {

        /*const userRepository = getCustomRepository(UserRepository);
        const all = await userRepository.find({
            relations: ["city"]
        });

        return response.status(200).json(all);*/
    }

    async create(request: Request, response: Response) {

        const { name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity } = request.body;
        
        const createUser = new CreateUserService();
        
        const user = await createUser.execute({name,email,birthDate,password,cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity})

        return response.status(201).json(user);

    }

};

export { UserController };
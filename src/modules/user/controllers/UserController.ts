import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { container } from 'tsyringe'
import { CreateUserService } from '@modules/user/services/CreateUserService';
import { ChangeAvatarService } from '@modules/user/services/ChangeAvatarService';
import {UserRepository} from '@modules/user/infra/typeorm/repositories/UserRepository'

class UserController {

    async show(request: Request, response: Response) {

        const userRepository = new UserRepository();
        const all = await userRepository.findAll();

        return response.status(200).json(all);
    }

    async create(request: Request, response: Response) {
        const { name,surname, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity, gender } = request.body;
        
        const createUserService = container.resolve(CreateUserService);

        const user = await createUserService.execute({name,surname,email,birthDate,password,cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity, avatar:request.file.filename, gender})

        return response.status(201).json(user);

    }

    async changeAvatar(request: Request, response: Response) {
        console.log(request.user)
        const id = request.user.id;
        const avatar = request.file.filename;
        
        const changeAvatar = container.resolve(ChangeAvatarService);

        const user = await changeAvatar.execute(id,avatar)

        return response.status(200).json(user);

    }

};

export { UserController };
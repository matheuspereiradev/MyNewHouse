import { DocumentValidation } from '@shared/helpers/documentValidation';
import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';

interface UserInterface{
    name:string, 
    email:string, 
    birthDate:Date, 
    password:string, 
    cpf:string, 
    cnpj:string, 
    street:string, 
    houseNumber:number, 
    district:string, 
    complement:string, 
    reference:string, 
    income:number, 
    phoneNumber:string, 
    phoneNumber2:string, 
    idCity:number
}

class CreateUserService {

    public async execute({name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity}:UserInterface):Promise<User> {

        const userRepository = getRepository(User);

        if (cpf) {
            if (!DocumentValidation.cpf(cpf)) {
                throw new Erro("CPF not is valid",1001);
            }
        }

        const emailAlreadyUse = await userRepository.findOne({
            where: { email }
        });

        if (emailAlreadyUse) {
            throw new Erro("Email already in use",1002, 409);
        }

        const hashedPassword = await hash(password, 8);
        const user = userRepository.create({
            name, email, birthDate, password: hashedPassword, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity
        });

        await userRepository.save(user)

        return user;

    }

};

export { CreateUserService };
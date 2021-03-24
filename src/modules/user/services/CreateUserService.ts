import { DocumentValidation } from '@shared/helpers/documentValidation';
import { inject,injectable } from 'tsyringe'
import { hash } from 'bcryptjs';
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '../IRepositories/IUserRepository';

interface IUserInterface{
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

@injectable()
class CreateUserService {
//isso é equivalete a criar uma variavel atribuir o paramtro a ele
    constructor(
        @inject('UserRepository')
        private repository:IUserRepository
    ){}

    public async execute({name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity}:IUserInterface):Promise<User> {

        if (cpf) {
            if (!DocumentValidation.cpf(cpf)) {
                throw new Erro("CPF not is valid",1001);
            }
        }

        const emailAlreadyUse = await this.repository.findByEmail(email);
        console.log(emailAlreadyUse)
        if (emailAlreadyUse) {
            throw new Erro("Email already in use",1002, 409);
        }

        const hashedPassword = await hash(password, 8);
        const user = await this.repository.create({
            name, email, birthDate, password: hashedPassword, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity
        });

        return user;
    }

};

export { CreateUserService };
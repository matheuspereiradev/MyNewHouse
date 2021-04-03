import { DocumentValidation } from '@shared/helpers/documentValidation';
import { inject,injectable } from 'tsyringe'
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '../IRepositories/IUserRepository';
import IHashProvider from '../infra/providers/HashProvider/models/IHashProvider'; 

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
        private repository:IUserRepository,

        @inject('HashProvider')
        private hashProvider:IHashProvider
    ){}

    public async execute({name, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity}:IUserInterface):Promise<User> {

        await this.validateDocument(cpf,cnpj);
        await this.validateEmail(email);
        
        

        const hashedPassword = await this.hashProvider.genarateHash(password);
        const user = await this.repository.create({
            name, email, birthDate, password: hashedPassword, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity
        });

        return user;
    }

    public async validateDocument(cpf:string,cnpj:string){
        if (cpf) {
            await this.validateCPF(cpf)
        }else if(cnpj){
            await this.validateCPNJ(cnpj)
        }else{
            throw new Erro("CPF or CNPJ is required",1026);
        }
    }

    public async validateCPF(cpf:string){
        
        await DocumentValidation.cpf(cpf)

        const user = await this.repository.findByCPF(cpf);

        if(user){
            throw new Erro("CPF already in use",1027,409);
        }
    }

    public async validateCPNJ(cnpj:string){
        const user = await this.repository.findByCNPJ(cnpj);
        if(user){
            throw new Erro("CNPJ already in use",1026,409);
        }
    }

    public async validateEmail(email:string){
        const emailAlreadyUse = await this.repository.findByEmail(email);

        if (emailAlreadyUse) {
            throw new Erro("Email already in use",1002, 409);
        }
    }

};

export { CreateUserService };
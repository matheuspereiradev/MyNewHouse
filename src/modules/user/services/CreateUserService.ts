import { DocumentValidation } from '@shared/helpers/documentValidation';
import { inject,injectable } from 'tsyringe'
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '../IRepositories/IUserRepository';
import IHashProvider from '../infra/providers/HashProvider/models/IHashProvider'; 
import ISendMail from '@shared/infra/providers/mail/model/ISendMail';
import EmailConfig from '@config/email';

interface IUserInterface{
    name:string, 
    surname:string,
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

interface IUserWelcomeEmail{
    email:string,
    name:string,
    surname:string
}

@injectable()
class CreateUserService {
//isso é equivalete a criar uma variavel atribuir o paramtro a ele
    constructor(
        @inject('SendMail') 
        private mailProvider:ISendMail,

        @inject('UserRepository')
        private repository:IUserRepository,

        @inject('HashProvider')
        private hashProvider:IHashProvider
    ){}

    public async execute({name,surname, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity}:IUserInterface):Promise<User> {

        await this.validateDocument(cpf,cnpj);
        await this.validateEmail(email);        

        const hashedPassword = await this.hashProvider.genarateHash(password);
        const user = await this.repository.create({
            name,surname, email, birthDate, password: hashedPassword, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity
        });

        const link = await this.sendWelcomeMail({email, name, surname});
        console.log(link)

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
        
        await DocumentValidation.cpf(cpf);

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

    public async sendWelcomeMail({email,name,surname}:IUserWelcomeEmail):Promise<string>{

        const variables = await this.assemblyRecoveryPasswordVariables(name,surname);
       
        const link = await this.mailProvider.sendEmail(email,EmailConfig.welcomeMail.title,variables,EmailConfig.welcomeMail.model);

        return link;
    }

    public async assemblyRecoveryPasswordVariables(name:string, surname:string):Promise<Object>{

        const variables = {
            surname,
            name
        }

        return variables;
    }

};

export { CreateUserService };
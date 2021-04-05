import { inject,injectable } from 'tsyringe'
import Erro from '@shared/errors/AppError';
import ISendMail from '@shared/infra/providers/mail/model/ISendMail';
import EmailConfig from '@config/email';
import IUserRepository from '../IRepositories/IUserRepository';
import IHashProvider from '../infra/providers/HashProvider/models/IHashProvider';
import { User } from '../infra/typeorm/entities/User';

interface IUserRequestRecoveryPassword{
    email:string  
}

interface IUserChangePassword{
    id:string,
    email:string,
    password:string  
}

interface IEmailVariables{
    name:string,
    date:Date,
    recoveryLink:string,
    id:string
}

@injectable()
export class RecoveryPassword{

    constructor(
        @inject('SendMail') 
        private mailProvider:ISendMail,

        @inject('UserRepository')
        private userRepository:IUserRepository,

        @inject('HashProvider')
        private hashProvider:IHashProvider
    ){}

    public async sendRecoveryMail({email}:IUserRequestRecoveryPassword):Promise<string>{

        const variables = await this.assemblyRecoveryPasswordVariables(email);
       
        const link = await this.mailProvider.sendEmail(email,EmailConfig.passwordRecovery.title,variables,EmailConfig.passwordRecovery.model);

        return link;
    }

    public async assemblyRecoveryPasswordVariables(email:string):Promise<IEmailVariables>{
        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new Erro("Invalid Email",1030)
        }

        const variablesRecovery = {
            name:user.name,
            surname:user.surname,
            date:new Date(),
            recoveryLink:EmailConfig.passwordRecovery.recoveryLink,
            id:user.id
        }

        return variablesRecovery;
    }

    public async changePassword({id,email,password}:IUserChangePassword):Promise<User>{
        
        await this.validateEmailId(id,email);

        const hashedPassword = await this.hashPassword(password);
        
        const user = await this.userRepository.patchPassword(id,hashedPassword);

        return user;
    }

    public async validateEmailId(id:string,email:string):Promise<any>{

        const user = await this.userRepository.findByEmail(email);
        if(!user)
            throw new Erro("invalid Email or ID",1031)
        
        if(user.id!==id)
            throw new Erro("invalid Email or ID",1032)
    }

    public async hashPassword(password:string):Promise<string>{
        const hashedPassword = await this.hashProvider.genarateHash(password);

        return hashedPassword;
    }

}

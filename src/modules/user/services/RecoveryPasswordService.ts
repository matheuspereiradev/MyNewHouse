import { inject,injectable } from 'tsyringe'
import Erro from '@shared/errors/AppError';
import ISendMail from '@shared/infra/providers/mail/model/ISendMail';
import EmailConfig from '@config/email';
import IUserRepository from '../IRepositories/IUserRepository';

interface IUserRecoveryPassword{
    email:string  
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
    ){}

    public async sendRecoveryMail({email}:IUserRecoveryPassword):Promise<string>{

        const variables = await this.assemblyRecoveryPasswordVariables(email);
       
        const link = await this.mailProvider.sendEmail(email,EmailConfig.passwordRecovery.title,variables,EmailConfig.passwordRecovery.model);

        return link;
    }

    public async assemblyRecoveryPasswordVariables(email:string):Promise<IEmailVariables>{
        const user = await this.userRepository.findByEmail(email);

        if(!user){
            throw new Erro("Email inválido",1030)
        }

        const variablesRecovery = {
            name:user.name,
            date:new Date(),
            recoveryLink:EmailConfig.passwordRecovery.recoveryLink,
            id:user.id
        }

        return variablesRecovery;
    }

}

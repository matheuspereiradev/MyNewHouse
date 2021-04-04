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

    public async sendRecoveryMail({email}:IUserRecoveryPassword):Promise<any>{

        const variables = await this.assemblyRecoveryPasswordVariables(email);
       
        this.mailProvider.sendEmail(email,EmailConfig.passwordRecovery.title,variables,EmailConfig.passwordRecovery.model);

    }

    public async assemblyRecoveryPasswordVariables(email:string):Promise<IEmailVariables>{
        const user = await this.userRepository.findByEmail(email);

        const variablesRecovery = {
            name:user.name,
            date:new Date(),
            recoveryLink:EmailConfig.passwordRecovery.recoveryLink,
            id:user.id
        }

        return variablesRecovery;
    }

}

import { inject,injectable } from 'tsyringe'
import Erro from '@shared/errors/AppError';
import ISendMail from '@shared/infra/providers/mail/model/ISendMail';
import EmailConfig from '@config/email';
import {resolve} from 'path';

interface IUserRecoveryPassword{
    email:string
}

export class RecoveryPassword{

    constructor(
       private mailProvider:ISendMail
    ){}

    public async sendRecoveryMail({email}:IUserRecoveryPassword):Promise<any>{

        const variables = {
            time:new Date()
        }
        
        this.mailProvider.sendEmail(email,EmailConfig.passwordRecovery.title,variables,EmailConfig.passwordRecovery.model)

    }

}

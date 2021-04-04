import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { container } from 'tsyringe'
import { RecoveryPassword } from '@modules/user/services/RecoveryPasswordService';

class PasswordController {

    async recoveryPassword(request: Request, response: Response) {
        const { email } = request.body;
        
        const recoveryPassword = container.resolve(RecoveryPassword);

        await recoveryPassword.sendRecoveryMail({email});

        return response.status(200).json({"status":"email sended"});
    }

    async changePassword(request: Request, response: Response){
        let { email } = request.query;
        const { id } = request.params;
        const { password } = request.body;

        email = email.toString();
        
        const recoveryPassword = container.resolve(RecoveryPassword);

        await recoveryPassword.changePassword({id,email,password});

        return response.status(200).json({"status":"password changed"});
    }

};

export { PasswordController };
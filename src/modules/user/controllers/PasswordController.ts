import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { container } from 'tsyringe'
import { RecoveryPassword } from '@modules/user/services/RecoveryPasswordService';

class PasswordController {

    async recoveryPassword(request: Request, response: Response) {
        const { email } = request.body;
        
        const recoveryPassword = container.resolve(RecoveryPassword);

        const link = await recoveryPassword.sendRecoveryMail({email})
        console.log(link);

        return response.status(200).json({"status":"email sended"});

    }

};

export { PasswordController };
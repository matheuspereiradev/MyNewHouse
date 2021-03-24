import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import authConfig from "@config/auth";
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';

interface Auth {
    email: string,
    password: string
}

interface ReturnUserAuth {
    user: User,
    token: string
}


class AuthUserService {

    async authenticate({ email, password }: Auth): Promise<ReturnUserAuth> {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({ where: { email } });

        if (!user) {
            throw new Erro("Email or password invalid",1003, 401);
        }

        
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Erro("Email or password invalid",1004, 401);
        }

        const { expireIn, secret } = authConfig.jwt;

        const token = sign(
            {
                email:user.email,
                isBroked:user.isBroker,
                name:user.name
            }, secret, {
                subject: user.id,
                expiresIn: expireIn,
            });

        return {
            user,
            token
        }
    }
}

export { AuthUserService };

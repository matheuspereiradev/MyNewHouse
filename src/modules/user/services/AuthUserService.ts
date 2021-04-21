import { sign } from 'jsonwebtoken';
import authConfig from "@config/auth";
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../IRepositories/IUserRepository';
import BCryptHashProvider from '../infra/providers/HashProvider/implementation/bcryptHashProvider';
import IHashProvider from '../infra/providers/HashProvider/models/IHashProvider';

interface Auth {
    email: string,
    password: string
}

interface ReturnUserAuth {
    user: User,
    token: string
}

@injectable()
class AuthUserService {

    constructor(
        @inject('UserRepository')
        private repository:IUserRepository,

        @inject('HashProvider')
        private hashProvider:IHashProvider
    ){}

    async authenticate({ email, password }: Auth): Promise<ReturnUserAuth> {
        
        const user = await this.repository.findByEmail(email);

        if (!user) {
            throw new Erro("Email or password invalid",1003, 401);
        }

        const passwordMatch = await this.hashProvider.compareHash(password, user.password);
        if (!passwordMatch) {
            throw new Erro("Email or password invalid",1004, 401);
        }

        const { expireIn, secret } = authConfig.jwt;

        const token = sign(
            {
                email:user.email,
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

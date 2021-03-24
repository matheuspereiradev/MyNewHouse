import { AuthUserService } from '@modules/user/services/AuthUserService';
import { Request, Response } from "express";
import { User } from  '@modules/user/infra/typeorm/entities/User';

interface Auth {
    email: string,
    password: string
}

interface ReturnUserAuth {
    user: User,
    token: string
}


class SessionController {
    async create(request: Request, response: Response) {

        const { email, password } = request.body;

        const sessionService = new AuthUserService();

        const { user, token } = await sessionService.authenticate({
            email,
            password
        });
        delete user.password;
        return response.status(200).json({ user, token });

    }
}

export { SessionController };

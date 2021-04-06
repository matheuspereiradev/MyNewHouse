import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { container } from 'tsyringe'
/*import { CreateUserService } from '@modules/user/services/CreateUserService';
import {UserRepository} from '@modules/user/infra/typeorm/repositories/UserRepository'*/

class PlanController {

    async show(request: Request, response: Response) {

        return response.status(200).json({})
    }

    async create(request: Request, response: Response) {
        
    }

};

export { PlanController };
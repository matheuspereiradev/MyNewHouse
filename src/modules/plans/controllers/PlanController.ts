import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { container } from 'tsyringe'
/*import { CreateUserService } from '@modules/user/services/CreateUserService';*/
import {PlanRepository} from '@modules/plans/infra/typeorm/repositories/PlanRepository'

class PlanController {

    async show(request: Request, response: Response) {
        const planRepository = new PlanRepository();

        const all = await planRepository.findAll()
        return response.status(200).json(all)
    }

    async create(request: Request, response: Response) {
        
    }

};

export { PlanController };
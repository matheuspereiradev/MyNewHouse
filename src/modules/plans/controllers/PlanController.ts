import { Request, Response } from 'express';
import Erro from '@shared/errors/AppError';
import { container } from 'tsyringe'
import {PlanRepository} from '@modules/plans/infra/typeorm/repositories/PlanRepository'

class PlanController {

    async show(request: Request, response: Response) {
        const planRepository = new PlanRepository();

        const all = await planRepository.findAll()
        return response.status(200).json(all)
    }

    async find(request: Request, response: Response) {
        const {id} = request.params
        const planRepository = new PlanRepository();

        const all = await planRepository.findByID(id)
        return response.status(200).json(all)
    }

};

export { PlanController };
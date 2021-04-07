
import { getRepository, Repository } from 'typeorm';
import {Plans} from '@modules/plans/infra/typeorm/entities/Plan';
import IPlanRepository from '@modules/plans/IRepositories/IPlanRepository';

class FakePlanRepository implements IPlanRepository{

    private plans:Plans [] = []

    public async findByID(id:number):Promise<Plans>{
        const all = this.plans.find(plan => plan.id === id,);;
        return all;
    };
    public async findAll():Promise<Array<Plans>>{
        const all = this.plans;
        return all;
    }


}

export {FakePlanRepository}
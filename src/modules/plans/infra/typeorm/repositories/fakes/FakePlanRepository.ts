
import { getRepository, Repository } from 'typeorm';
import {Plans} from '@modules/plans/infra/typeorm/entities/Plan';
import IPlanRepository from '@modules/plans/IRepositories/IPlanRepository';

class FakePlanRepository implements IPlanRepository{

    private plans:Plans [] = [{
        id:1,
        adsAmount:1,
        created_at:new Date(),
        imageAmount:1,
        monthlyValue:12.00,
        name:"p1",
        videoAmount:1,
        deleted_at:null
    },{
        id:2,
        adsAmount:1,
        created_at:new Date(),
        imageAmount:1,
        monthlyValue:12.00,
        name:"p2",
        videoAmount:1,
        deleted_at:null
    }]

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
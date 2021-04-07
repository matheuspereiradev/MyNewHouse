
import { getRepository, Repository } from 'typeorm';
import {Plans} from '@modules/plans/infra/typeorm/entities/Plan';
import IPlanRepository from '@modules/plans/IRepositories/IPlanRepository';

class PlanRepository implements IPlanRepository{

    private ormRepository:Repository<Plans>;

    constructor(){
        this.ormRepository = getRepository(Plans)
    }

    public async findByID(id:number):Promise<Plans>{
        const all = await this.ormRepository.findOne({where: {id}});
        return all;
    };

    public async findAll():Promise<Array<Plans>>{
        const all = await this.ormRepository.find();
        return all;
    }


}

export {PlanRepository}
import { Plans } from '@modules/plans/infra/typeorm/entities/Plan';

export default interface IPlanRepository{
    findByID(id:number):Promise<Plans|undefined>;
    findAll():Promise<Array<Plans>>;
}
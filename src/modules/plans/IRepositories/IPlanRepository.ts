import { Plans } from '@modules/plans/infra/typeorm/entities/Plan';

export default interface IPlanRepository{
    findByID(id:string):Promise<Plans|undefined>;
    findAll():Promise<Array<Plans>>;
}
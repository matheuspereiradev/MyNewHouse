import IPlanRepository from "@modules/plans/IRepositories/IPlanRepository";
import { inject, injectable } from "tsyringe";
import { User } from "../infra/typeorm/entities/User";
import IUserRepository from "../IRepositories/IUserRepository";
import Erro from '@shared/errors/AppError';
import { Plans } from "@modules/plans/infra/typeorm/entities/Plan";

@injectable()
export class ChangeUserPlan{

    constructor(
        @inject('UserRepository')
        private userRepository:IUserRepository,

        @inject('PlanRepository')
        private planRepository:IPlanRepository
    ){}

    public async execute(idUser:string,idPlan:number):Promise<User>{
        const user = await this.findUser(idUser);
        const plan = await this.findPlan(idPlan);

        user.idPlan = idPlan;
        user.plan = plan;

        await this.userRepository.saveUpdate(user);

        return user;
    }

    public async findUser(idUser:string):Promise<User>{
        const user = await this.userRepository.findByID(idUser)

        if(!user)
            throw new Erro("Invalid user",1030);

        return user;    
    }

    public async findPlan(idPlan:number):Promise<Plans>{
        const plan = await this.planRepository.findByID(idPlan);

        if(!plan)
            throw new Erro("Plan not found",1031);

        return plan;    
    }

}
import { inject,injectable } from 'tsyringe'
import Erro from '@shared/errors/AppError';
import ICreateBillingDTO from '@modules/billing/dtos/ICreateBilling';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
//import ISendMail from '@shared/infra/providers/mail/model/ISendMail';
import IBillingRepository from '@modules/billing/IRepositories/IBillingRepository';
import { Billing } from '@modules/billing/infra/typeorm/entities/Billing';
import { User } from '@modules/user/infra/typeorm/entities/User';
import IGenetateCharge from '../infra/providers/charges/model/IGenerateCharge';
import { Plans } from '@modules/plans/infra/typeorm/entities/Plan';

// interface IChargeInterface{
//     idUser:string, 
//     idPlan:number
// }

interface IUserBillData{
    cpf:string,
    cnpj:string,
    name:string,
}

@injectable()
class CreateChargeService {
//isso é equivalete a criar uma variavel atribuir o paramtro a ele
    constructor(
        @inject('UserRepository')
        private userRepository:IUserRepository,

        @inject('BillingRepository')
        private billingRepository:IBillingRepository,

        @inject('GenerateRemoteCharge')
        private remoteGenerateCharge:IGenetateCharge,

    ){}

    public async execute(idUser:string,idPlan:number):Promise<Billing> {
        const remoteCharge = await this.createRemoteCharge(idUser,idPlan);
        //const bill = await this.billingRepository.create();
        
        return bill;

    }

    public async createRemoteCharge(idUser:string,idPlan:number):Promise<Billing>{
        const user = this.userRepository.findByID(idUser);


    }

    public async 

    
    

};

export { CreateChargeService };
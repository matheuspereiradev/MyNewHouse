import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreditCardProvider from '@modules/charges/infra/providers/charges/model/ICreditCardProvider';

@injectable()
class GenerateCreaditCardChargeService {

    constructor(
        @inject('CreditCardProvider') 
        private creditCardProvider:ICreditCardProvider,
        
        @inject('UserRepository') 
        private userRepository:IUserRepository
    ){}

    public async execute({transaction_amount,token,description,installments,payment_method_id,issuer_id,email,docType,docNumber}):Promise<any> {

        await this.creditCardProvider.generate({transaction_amount,token,description,installments,payment_method_id,issuer_id,email,docNumber,docType})

        return null;
    }

};

export { GenerateCreaditCardChargeService };

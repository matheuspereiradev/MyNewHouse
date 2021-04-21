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

    public async execute():Promise<any> {

        await this.creditCardProvider.generate()

        return null;
    }

};

export { GenerateCreaditCardChargeService };

import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreditCardProvider from '../IRepositories/ICreditCardRepository';

@injectable()
class GenerateCreaditCardCharge {

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

export { GenerateCreaditCardCharge };

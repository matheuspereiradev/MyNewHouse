import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
class GenerateCreaditCardCharge {

    constructor(
        
        @inject('UserRepository') 
        private userRepository:IUserRepository
    ){}

    public async execute():Promise<any> {

        return null;
    }

};

export { GenerateCreaditCardCharge };

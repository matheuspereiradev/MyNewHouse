import { User } from '@modules/user/infra/typeorm/entities/User';
import { inject, injectable } from 'tsyringe';
import IUserRepository from '../IRepositories/IUserRepository';

@injectable()
class InactivateUserService {

    constructor(
        @inject('UserRepository')
        private repository:IUserRepository
    ){}

    public async execute(id:string):Promise<User> {   

        const user = await this.repository.inactivate(id);

        return user;
    }

};

export { InactivateUserService };

import { inject,injectable } from 'tsyringe'
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import IPropertyRepository from '../IRepositories/IPropertyRepository';
import ICreatePropertyDTO from '../dtos/ICreatePropertyDTO';
import { Property } from '../infra/typeorm/entities/Property';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';

@injectable()
class CreatePropertyService {

    constructor(
        @inject('PropertyRepository') 
        private propertyRepository:IPropertyRepository,

        @inject('UserRepository') 
        private userRepository:IUserRepository
    ){}

    public async execute(data:ICreatePropertyDTO):Promise<Property> {

        await this.validateAmountUserProperties(data.idAdvertiser)

        const property = await this.propertyRepository.create(data);
        
        return property;
    }

    public async validateAmountUserProperties(idUser:string):Promise<any>{

        const user = await this.userRepository.findByID(idUser);
        const amountUserAds = await this.propertyRepository.countUserProperties(idUser);

        if(!user)
            throw new Erro("Internal error: plan not found",1037)

        if(amountUserAds>=user.plan.adsAmount)
            throw new Erro("maximum number of ads reached",1037)
    }

    

};

export { CreatePropertyService };
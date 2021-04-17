import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import ICreatePropertyDTO from '../dtos/ICreatePropertyDTO';
import { Property } from '../infra/typeorm/entities/Property';
import IPropertyRepository from '../IRepositories/IPropertyRepository';

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

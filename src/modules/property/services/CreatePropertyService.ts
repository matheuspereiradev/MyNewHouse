import { inject,injectable } from 'tsyringe'
import Erro from '@shared/errors/AppError';
import { User } from '@modules/user/infra/typeorm/entities/User';
import IPropertyRepository from '../IRepositories/IPropertyRepository';
import ICreatePropertyDTO from '../dtos/ICreatePropertyDTO';
import { Property } from '../infra/typeorm/entities/Property';

@injectable()
class CreatePropertyService {

    constructor(
        @inject('PropertyRepository') 
        private propertyRepository:IPropertyRepository
    ){}

    public async execute(data:ICreatePropertyDTO):Promise<Property> {

        const property = await this.propertyRepository.create(data);
        
        return property;
    }

    

};

export { CreatePropertyService };
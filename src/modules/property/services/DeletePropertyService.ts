import Erro from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IDeletePropertyDTO from '../dtos/IDeletepropertyDTO';
import { Property } from '../infra/typeorm/entities/Property';
import IPropertyRepository from '../IRepositories/IPropertyRepository';

@injectable()
class DeletePropertyService {

    constructor(
        @inject('PropertyRepository') 
        private propertyRepository:IPropertyRepository
    ){}

    public async execute(data:IDeletePropertyDTO):Promise<Property> {

        await this.validateUser(data.idAdvertiser,data.idProperty)

        const property = await this.propertyRepository.delete(data.idProperty);
        
        return property;
    }

    public async validateUser(idUser:string,idProperty:string):Promise<any>{
        
        const property = await this.propertyRepository.findByID(idProperty);

        if(!property){
            throw new Erro("Internal error: property not found",1039)
        }
            

        if(idUser!==property.idAdvertiser){
            throw new Erro("You not have permission to execute this action",1040)
        }
            
    }

    

};

export { DeletePropertyService };

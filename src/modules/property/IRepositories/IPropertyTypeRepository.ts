import { PropertyType } from '@modules/property/infra/typeorm/entities/PropertyType';

export default interface IPropertyTypeRepository{
    findAll():Promise<Array<PropertyType>>;
}
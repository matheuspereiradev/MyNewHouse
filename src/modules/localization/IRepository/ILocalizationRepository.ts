import { City } from "@modules/localization/infra/typeorm/entities/City";

export default interface ILocalizationRepository{
    findByUF(state:string):Promise<Array<City>|undefined >;
}
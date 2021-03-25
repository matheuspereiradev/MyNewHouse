
import { getRepository, Repository } from 'typeorm'
import {City} from '@modules/localization/infra/typeorm/entities/City'
import ILocalizationRepository from '@modules/localization/IRepository/ILocalizationRepository'

class CityRepository implements ILocalizationRepository {

    private ormRepository:Repository<City>;

    constructor(){
        this.ormRepository = getRepository(City)
    }

    public async findByUF(state:string):Promise<Array<City>|undefined >{

        const findCities = this.ormRepository.find({where:{uf:state}});
        return findCities||undefined;
    }

    public async findAll():Promise<Array<City>>{
        const findedCities = this.ormRepository.find();
        return findedCities;
    }

}

export {CityRepository}
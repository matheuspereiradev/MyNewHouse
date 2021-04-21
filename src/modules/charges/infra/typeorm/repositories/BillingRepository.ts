
import { getRepository, Repository, UpdateResult } from 'typeorm';
import IBillingRepository from '@modules/billing/IRepositories/IBillingRepository';
import {Billing} from '@modules/billing/infra/typeorm/entities/Billing';
import ICreateBillingDTO from '@modules/billing/dtos/ICreateBilling';

class BillingRepository implements IBillingRepository{

    private ormRepository:Repository<Billing>;

    constructor(){
        this.ormRepository = getRepository(Billing)
    }

    public async create({barcode,billingValue,digitableLine,expirationDate,ourNumber,paymentDay,paymentLink}:ICreateBillingDTO):Promise<Billing>{
        const billing =  this.ormRepository.create({barcode,billingValue,digitableLine,expirationDate,ourNumber,paymentDay,paymentLink});

        await this.ormRepository.save(billing);

        return billing;
    }

    
    public async findByID(id:string):Promise<Billing>{
        const all = await this.ormRepository.findOne({relations: ["plan","user"],where: {id}});
        return all;
    };

    // public async findByCPF(cpf:string):Promise<Array<Billing>>{
    //     const all = await this.ormRepository.find({relations: ["plan","user"],where: {idUser}});
    //     return all;
    // };

    // public async findByCNPJ(cnpj:string):Promise<Array<Billing>>{
    //     const all = await this.ormRepository.find({relations: ["plan","user"],where: {}});
    //     return all;
    // };

    public async delete(id:string):Promise<Billing>{
        const bill = await this.ormRepository.findOne({relations: ["plan","user"],where: {id}});

        await this.ormRepository.softDelete({id});

        return bill;
    };

    public async findByUser(idUser:string):Promise<Array<Billing>>{
        const all = await this.ormRepository.find({relations: ["plan","user"],where: {idUser}});
        return all;
    };

    public async payBilling(id:string,paymentDay:Date):Promise<Billing>{
        
        const bill = await this.ormRepository.findOne({where: {id}});
        bill.paymentDay = paymentDay;

        await this.ormRepository.save(bill)

        return bill;
    };

    public async findAll():Promise<Array<Billing>>{
        const all = await this.ormRepository.find({relations: ["plan","user"]});
        return all;
    }

}

export {BillingRepository}
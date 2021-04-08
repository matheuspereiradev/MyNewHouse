
import { getRepository, Repository, UpdateResult } from 'typeorm';
import IBillingRepository from '@modules/billing/IRepositories/IBillingRepository';
import {Billing} from '@modules/billing/infra/typeorm/entities/Billing';
import ICreateBillingDTO from '@modules/billing/dtos/ICreateBilling';

class FakeBillingRepository implements IBillingRepository{

    private billings:Billing[]=[];

    public async create({barcode,billingValue,digitableLine,expirationDate,idProduct,idUser,ourNumber,paymentDay,paymentLink}:ICreateBillingDTO):Promise<Billing>{
   
        const bill = new Billing();

        Object.assign(bill,{barcode,billingValue,digitableLine,expirationDate,idProduct,idUser,ourNumber,paymentDay,paymentLink});

        this.billings.push(bill);

        return bill;
    }

    
    public async findByID(id:string):Promise<Billing>{
        const bill = this.billings.find(bill=>bill.id === id);

        return bill
    };


    public async delete(id:string):Promise<Billing>{
        const indexBill = this.billings.findIndex(bill=>bill.id === id);
        const bill = this.billings[indexBill];
        this.billings.splice(indexBill,1)
        return bill;
    };

    public async findByUser(idUser:string):Promise<Array<Billing>>{
        const bill = this.billings.filter(bill=>bill.idUser === idUser);

        return bill;
    };

    public async payBilling(id:string,paymentDay:Date):Promise<Billing>{
        
        const indexBill = this.billings.findIndex(bill=>bill.id === id);

        const bill = this.billings[indexBill]
        bill.paymentDay = paymentDay;

        this.billings.splice(indexBill,1,bill)

        return bill;
    };

    public async findAll():Promise<Array<Billing>>{
        return this.billings;
    }

}

export {FakeBillingRepository}
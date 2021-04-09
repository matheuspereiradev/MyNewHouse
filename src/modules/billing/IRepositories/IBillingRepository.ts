import { Billing } from '@modules/billing/infra/typeorm/entities/Billing';
import ICreateBillingDTO from '@modules/billing/dtos/ICreateBilling';

export default interface IBillingRepository{
    create(data:ICreateBillingDTO):Promise<Billing>;
    findByUser(idUser:string):Promise<Array<Billing>>;
    findByID(id:string):Promise<Billing>;
    // findByCPF(cpf:string):Promise<Array<Billing>>;
    // findByCNPJ(cnpj:string):Promise<Array<Billing>>;
    findAll():Promise<Array<Billing>>;
    delete(id:string):Promise<Billing>;
    payBilling(id:string,paymentDay:Date):Promise<Billing>;
}
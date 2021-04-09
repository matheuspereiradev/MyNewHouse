import ICreateBillingDTO from "@modules/billing/dtos/ICreateBilling";
import IGenerateCreditCardPayment from "@modules/billing/dtos/IGenerateCreditCardPayment";
import { Plans } from "@modules/plans/infra/typeorm/entities/Plan";
import { User } from "@modules/user/infra/typeorm/entities/User";

export default interface IGenerateCharge{
    //generateCharge(user:User, plan:Plans, APIToken:string):Promise<ICreateBillingDTO>;
    generateCreditCardCharge(creditCardData:IGenerateCreditCardPayment,APIToken:string):Promise<ICreateBillingDTO>;
    generateAPIToken():Promise<string>;
}
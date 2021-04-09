import IGenetateCharge from "../model/IGenerateCharge";
import Erro from '@shared/errors/AppError';
import ICreateBillingDTO from "@modules/billing/dtos/ICreateBilling";
import IGenerateCreditCardPayment from "@modules/billing/dtos/IGenerateCreditCardPayment";

class GenerateChargeFake implements IGenetateCharge{

    public async generateCreditCardCharge(creditCardData:IGenerateCreditCardPayment,APIToken:string):Promise<ICreateBillingDTO>{
        if (APIToken !== "53rgfRAxXqQcKkds")
            throw new Erro("Incorrect Token API", 1040)
        
       return{
            barcode:"123456789",
            billingValue:120.00,
            cpf:creditCardData.cpf,
            cnpj:creditCardData.cnpj,
            digitableLine:"555555",
            expirationDate:new Date(),
            ourNumber:"000000000",
            paymentDay:null,
            paymentLink:"www.google.com/12345"
       }     
    }
    public async generateAPIToken():Promise<string>{
        return "53rgfRAxXqQcKkds"
    }

}

export {GenerateChargeFake}
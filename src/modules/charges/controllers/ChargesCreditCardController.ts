import { Request, Response } from "express";
import { container } from "tsyringe";
import { GenerateCreaditCardChargeService } from "@modules/charges/services/GenerateCreditCardChargeService";

class ChargesCreditCardController {

    public async create(request:Request,response:Response){
       const {transaction_amount,token,description,installments,payment_method_id,issuer_id,email,docType,docNumber} = request.body;

        const generateChargeCreditCard = container.resolve(GenerateCreaditCardChargeService)

        const charge = await generateChargeCreditCard.execute({transaction_amount,token,description,installments,payment_method_id,issuer_id,email,docType,docNumber})

        return response.status(200).json(charge)
    }

}

export {ChargesCreditCardController}
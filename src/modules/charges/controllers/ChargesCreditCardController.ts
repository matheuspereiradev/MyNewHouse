import { Request, Response } from "express";
import { container } from "tsyringe";
import { GenerateCreaditCardChargeService } from "@modules/charges/services/GenerateCreaditCardChargeService";

class ChargesCreditCardController {

    public async create(request:Request,response:Response){
        const generateChargeCreditCard = container.resolve(GenerateCreaditCardChargeService)

        const charge = await generateChargeCreditCard.execute()

        return response.status(200).json(charge)
    }

}

export {ChargesCreditCardController}
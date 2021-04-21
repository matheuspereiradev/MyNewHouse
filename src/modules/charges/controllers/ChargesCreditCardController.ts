import { Request, Response } from "express";
import { container } from "tsyringe";
import { GenerateCreaditCardCharge } from "../services/GenerateCreditCardCharge";

class ChargesCreditCardController {


    public async create(request:Request,response:Response){
        const generateChargeCreditCard = container.resolve(GenerateCreaditCardCharge)

        const charge = await generateChargeCreditCard.execute()

        return response.status(200).json(charge)
    }

}

export {ChargesCreditCardController}
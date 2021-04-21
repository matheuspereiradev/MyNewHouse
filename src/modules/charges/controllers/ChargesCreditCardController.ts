import { Request, Response } from "express";
import { container } from "tsyringe";
import { GenerateCreaditCardCharge } from "../services/GenerateCreditCardCharge";

//import {BillingRepository} from "@modules/billing/infra/typeorm/repositories/BillingRepository"

class ChargesCreditCardController {

    // public async show(request:Request,response:Response){
    //     const billingRepository = new BillingRepository();

    //     const all = await billingRepository.findAll();

    //     response.status(200).json(all)
    // } 

    public async create(request:Request,response:Response){
        const generateChargeCreditCard = container.resolve(GenerateCreaditCardCharge)

        const charge = await generateChargeCreditCard.execute()

        return response.status(200).json(charge)
    }

}

export {ChargesCreditCardController}
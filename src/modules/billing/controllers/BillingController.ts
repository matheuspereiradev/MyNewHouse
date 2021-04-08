import { Request, Response } from "express";

import {BillingRepository} from "@modules/billing/infra/typeorm/repositories/BillingRepository"

class BillingController {

    public async show(request:Request,response:Response){
        const billingRepository = new BillingRepository();

        const all = await billingRepository.findAll();

        response.status(200).json(all)
    } 

}

export {BillingController}
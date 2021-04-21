import ICreditCardProvider from "../model/ICreditCardProvider";
import mercadopago from "mercadopago"
import IPaymentCredCardDTO from "@modules/charges/dtos/IPaymentCredCardDTO";
import { CreatePaymentPayload } from "mercadopago/models/payment/create-payload.model";

class CreditCardMercadoPago implements ICreditCardProvider{
    
    public async generate(data:IPaymentCredCardDTO):Promise<any>{

        const paymentData:CreatePaymentPayload = {
            transaction_amount:data.transaction_amount,
            token:data.token,
            description:data.description,
            installments:data.installments,
            payment_method_id:data.payment_method_id,
            issuer_id:data.issuer_id,
            payer: {
                email: data.email,
                identification: {
                  type: data.docType,
                  number: data.docNumber
                }
            }
        }

        mercadopago.payment.save(paymentData)
        .then(function(res) {
            {
                console.log(res)
            };
        })
        .catch(function(error) {
            console.log(error)
        });

          
    }
}

export {CreditCardMercadoPago}
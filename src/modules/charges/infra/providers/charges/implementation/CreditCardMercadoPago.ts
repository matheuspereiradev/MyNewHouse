import mercadopago from "mercadopago";
import IGenerateCharge from "@modules/billing/infra/providers/charges/model/IGenerateCreditCardCharge"
import ICreditCardPaymentData from "../model/ICreditCardPaymentData";

class CreditCardMercadoPago implements IGenerateCharge{
    constructor(){
        mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_SANDBOX_ACCESSTOKEN);
    }

    public async processPayment(paymentData:ICreditCardPaymentData):Promise<any>{
        const payment_data = {
            transaction_amount: paymentData.transactionAmount,
            token: paymentData.token,
            description: paymentData.description,
            installments: paymentData.installments,
            payment_method_id: paymentData.paymentMethodId,
            issuer_id: paymentData.issuer,
            payer: {
              email: paymentData.payer.email,
              identification: {
                type: paymentData.payer.docType,
                number: paymentData.payer.docNumber
              }
            }
          };
        
        mercadopago.payment.save(payment_data)
            .then(function(res) {
              return{
                status: res.body.status,
                status_detail: res.body.status_detail,
                id: res.body.id
              };
            })
            .catch(function(error) {
              throw new Error(error);
        });
    }
    
    public async getPaymentMethods(){
      // return await mercadopago.preferences.create();
    }
}

export {CreditCardMercadoPago}
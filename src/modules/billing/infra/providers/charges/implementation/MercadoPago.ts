import mercadopago from "mercadopago"

interface IPaymentData{
    transactionAmount:number,
    token:string,
    description:string,
    installments:number,
    paymentMethodId:string,
    issuer:string,
    payer:{
        email:string,
        docType:string,
        docNumber:string
    }
}

class MercadoPagoIntegration{
    constructor(){
        mercadopago.configurations.setAccessToken(process.env.MERCADOPAGO_SANDBOX_ACCESSTOKEN);
    }

    public async processPayment(paymentData:IPaymentData):Promise<any>{
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
        mercadopago.utils.get("/v1/payment_methods");
    }
}

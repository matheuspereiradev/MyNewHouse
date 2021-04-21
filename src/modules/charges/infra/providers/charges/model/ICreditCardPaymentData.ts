export default interface ICreditCardPaymentData{
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
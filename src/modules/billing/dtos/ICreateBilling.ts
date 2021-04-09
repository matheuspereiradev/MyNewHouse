export default interface ICreateBillingDTO{
    barcode:string, 
    digitableLine:string,
    paymentLink:string,
    ourNumber:string,
    paymentDay:Date,
    billingValue:number,
    expirationDate:Date,
    cpf:string,
    cnpj:string
}
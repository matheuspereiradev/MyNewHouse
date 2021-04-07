export default interface ICreateBillingDTO{
    barcode:string, 
    digitableLine:string,
    paymentLink:string,
    ourNumber:string,
    paymentDay:string,
    billingValue:number,
    expirationDate:Date,
    idProduct:number,
    idUser:string
}
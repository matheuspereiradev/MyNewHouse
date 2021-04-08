export default interface ICreateBillingDTO{
    barcode:string, 
    digitableLine:string,
    paymentLink:string,
    ourNumber:string,
    paymentDay:Date,
    billingValue:number,
    expirationDate:Date,
    idProduct:number,
    idUser:string
}
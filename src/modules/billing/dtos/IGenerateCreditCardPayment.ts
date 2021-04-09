
export default interface IGenerateCreditCardPayment{
    cardNumber:string, 
    titularName:string,
    expirationDate:string,
    ccv:string,
    cpf:string,
    cnpj:string,
    value:number
}
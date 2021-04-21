
export default interface IPaymentCredCardDTO{
  transaction_amount:number,
  token:string,
  description:string,
  installments:number,
  payment_method_id:string,
  issuer_id:string,
  email: string,
  docType: string,
  docNumber: string
}
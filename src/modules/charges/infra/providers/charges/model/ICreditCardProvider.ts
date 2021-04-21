import IPaymentCredCardDTO from "@modules/charges/dtos/IPaymentCredCardDTO";

export default interface ICreditCardProvider{
    generate(data:IPaymentCredCardDTO):Promise<any>;
}
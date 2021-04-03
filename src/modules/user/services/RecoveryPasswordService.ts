
interface IUserRecoveryPassword{
    email:string
}

export class RecoveryPassword{
    public async sendRecoveryMail({email}:IUserRecoveryPassword):Promise<any>{
        

    }
}

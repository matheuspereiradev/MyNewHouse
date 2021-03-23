class AppError{
    public readonly message:string;
    public readonly statusCode:number;
    public readonly internalCode:number;

    constructor(msg:string,internal:number,code=400){
        this.message = msg;
        this.statusCode = code;
        this.internalCode = internal
    }

}

export default AppError;
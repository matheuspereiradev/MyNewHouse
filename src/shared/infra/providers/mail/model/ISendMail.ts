export default interface ISendMail{
    sendEmail(to:string,subject:string,variables:object,model:string):Promise<string>;
}
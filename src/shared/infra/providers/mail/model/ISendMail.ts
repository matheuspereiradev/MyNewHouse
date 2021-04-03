export default interface IHashProvider{
    genarateHash(seed:string):Promise<string>;
    compareHash(text:string, hashedString:string):Promise<boolean>;
}
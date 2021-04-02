import IHashProvider from "@modules/user/infra/providers/HashProvider/models/IHashProvider";
import { compare, hash } from "bcryptjs";

export default class BCryptHashProvider implements IHashProvider{

    public async genarateHash(seed:string):Promise<string>{
        return hash(seed,8);
    }

    public async compareHash(text:string, hashedString:string):Promise<boolean>{
        return compare(text,hashedString);
    }
};

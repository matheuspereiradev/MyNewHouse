import IHashProvider from "@modules/user/infra/providers/HashProvider/models/IHashProvider";

export default class FakeHashProvider implements IHashProvider{

    hash:string = "hashed"

    public async genarateHash(seed:string):Promise<string>{
        return seed+this.hash;
    }

    public async compareHash(text:string, hashedString:string):Promise<boolean>{
        return text === text+this.hash;
    }
};

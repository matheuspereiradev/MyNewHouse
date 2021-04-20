import { inject, injectable } from "tsyringe";
import { User } from "../infra/typeorm/entities/User";
import IUserRepository from "../IRepositories/IUserRepository";

@injectable()
export class ChangeAvatarService{

    constructor(
        @inject('UserRepository')
        private userRepository:IUserRepository
    ){}

    public async execute(idUser:string,avatar:string):Promise<User>{

        const user = await this.userRepository.changeAvatar(idUser,avatar);

        return user;
    }

}
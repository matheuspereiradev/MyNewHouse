import { User } from '@modules/user/infra/typeorm/entities/User';
import Erro from '@shared/errors/AppError';
import { DocumentValidation } from '@shared/helpers/documentValidation';
import { inject, injectable } from 'tsyringe';
import IUpdateUserDTO from '../dtos/IUpdateUserDTO';
import IHashProvider from '../infra/providers/HashProvider/models/IHashProvider';
import IUserRepository from '../IRepositories/IUserRepository';
import fs from 'fs';
import path from 'path'

@injectable()
class UpdateUserService {
    constructor(
        @inject('UserRepository')
        private repository:IUserRepository,

        @inject('HashProvider')
        private hashProvider:IHashProvider
    ){}

    public async execute({id,name,surname, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity,slug, avatar, gender}:IUpdateUserDTO):Promise<User> {

        await this.validateDocument(cpf,cnpj,id);
        await this.validateEmail(email,id);   
        await this.verifyAvatar(id,avatar);
        
        const hashedPassword = await this.hashProvider.genarateHash(password);
        const user = await this.repository.update({
            id,name,surname, email, birthDate, password: hashedPassword, cpf, cnpj, street, houseNumber, district, complement, reference, income, phoneNumber, phoneNumber2, idCity, avatar, gender,slug
        });

        return user;
    }

    public async validateDocument(cpf:string,cnpj:string,id:string){
        if(cpf && cnpj){
            throw new Erro("Not is possible define a cpf and a cnpj for one person",1059);
        }else if (cpf) {
            await this.validateCPF(cpf,id)
        }else if(cnpj){
            await this.validateCPNJ(cnpj,id)
        }else{
            throw new Erro("CPF or CNPJ is required",1058);
        }
    }

    public async validateCPF(cpf:string,id:string){
        
        await DocumentValidation.cpf(cpf);

        const user = await this.repository.findByCPF(cpf);

        if((user)&&(user.id!==id)){
            throw new Erro("CPF already in use",1057,409);
        }
    }

    public async validateCPNJ(cnpj:string,id:string){
        const user = await this.repository.findByCNPJ(cnpj);
        if((user)&&(user.id!==id)){
            throw new Erro("CNPJ already in use",1056,409);
        }
    }

    public async validateEmail(email:string,id:string){
        const emailAlreadyUse = await this.repository.findByEmail(email);

        if ((emailAlreadyUse)&&(emailAlreadyUse.id!==id)) {
            throw new Erro("Email already in use",1050, 409);
        }
    }

    public async verifyAvatar(id:string,avatar:string):Promise<any>{
        if(avatar){
            const user = await this.repository.findByID(id);

            fs.unlink(path.resolve(__dirname,'..','..','..','..','temp',user.avatar),(err)=>{
                if(err){
                    console.error(err);
                    new Erro("Fail update", 1060)
                }                
            });
        }
        
    }

};

export { UpdateUserService };

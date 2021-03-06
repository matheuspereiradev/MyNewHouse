
import { getRepository, Repository } from 'typeorm';
import {User} from '@modules/user/infra/typeorm/entities/User';
import IUserRepository from '@modules/user/IRepositories/IUserRepository';
import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import IUpdateUserDTO from '@modules/user/dtos/IUpdateUserDTO';

class UserRepository implements IUserRepository{

    private ormRepository:Repository<User>;

    constructor(){
        this.ormRepository = getRepository(User)
    }

    public async create({name, surname, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, phoneNumber, phoneNumber2, idCity, avatar,gender}:ICreateUserDTO):Promise<User>{
        const user =  this.ormRepository.create({name, surname, email, birthDate, password, cpf, cnpj, street, houseNumber, district, complement, reference, phoneNumber, phoneNumber2, idCity,avatar, gender});

        await this.ormRepository.save(user);

        return user;
    }

    public async patchPassword(id:string,password:string):Promise<User>{
        const user = await this.ormRepository.findOne({id});

        user.password = password;

        await this.ormRepository.save(user);

        return user;
    }

    public async update(data:IUpdateUserDTO):Promise<User>{
        const user = await this.ormRepository.findOne({where:{id:data.id}});

        user.idCity = data.idCity;
        user.name = data.name;
        user.phoneNumber = data.phoneNumber;
        user.phoneNumber2 = data.phoneNumber2;
        user.reference =data.reference;
        user.slug = data.slug;
        user.street =data.street;
        user.surname = data.surname;
        user.avatar = data.avatar;
        user.birthDate = data.birthDate;
        user.cnpj = data.cnpj;
        user.complement = data.complement;
        user.cpf = data.cpf;
        user.district = data.district;
        user.email  = data.email;
        user.gender = data.gender;
        user.houseNumber = data.houseNumber;
        if (data.password!=="")
            user.password = data.password;

        await this.ormRepository.save(user);

        return user;
    }

    public async findByEmail(email:string):Promise<User>{
        const all = await this.ormRepository.findOne({relations: ["city","plan"],where: {email}});
        return all;
    };

    public async findByID(id:string):Promise<User>{
        const all = await this.ormRepository.findOne({relations: ["city","plan"], where: {id}});
        return all;
    };
    public async findAll():Promise<Array<User>>{
        const all = await this.ormRepository.find({relations: ["city","plan"]});
        return all;
    }

    public async findByCNPJ(cnpj:string):Promise<User>{
        const all = await this.ormRepository.findOne({relations: ["city","plan"], where:{cnpj}});
        return all;
    }

    public async findByCPF(cpf:string):Promise<User>{
        const all = await this.ormRepository.findOne({relations: ["city","plan"], where:{cpf}});   
        return all;
    }

    public async savePatch(user:User):Promise<User>{
        await this.ormRepository.save(user);

        return user;
    }

    public async changeAvatar(idUser:string, avatar:string):Promise<User>{
        const user = await this.ormRepository.findOne({where:{id:idUser}});
        user.avatar = avatar;
        await this.ormRepository.save(user)
        return user;
    }

    public async delete(idUser:string):Promise<User>{
        const user = this.ormRepository.findOne({where:{id:idUser}})
        await this.ormRepository.delete({id:idUser})
        return user;
    }

    public async inactivate(idUser:string):Promise<User>{
        const user = this.ormRepository.findOne({where:{id:idUser}})
        await this.ormRepository.softDelete({id:idUser})
        return user;
    }

}

export {UserRepository}
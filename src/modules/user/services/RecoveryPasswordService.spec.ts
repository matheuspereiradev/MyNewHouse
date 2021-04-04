import "reflect-metadata"
import {CreateUserService} from "./CreateUserService";
import {FakeUserRepository} from "../infra/typeorm/repositories/fakes/FakeUserRepository";
import {RecoveryPassword} from './RecoveryPasswordService';
import {FakeNodeMailerProvider} from '@shared/infra/providers/mail/fakes/FakeNodeMailerProvider'
import Erro from '@shared/errors/AppError';
import FakeHashProvider from "../infra/providers/HashProvider/fakes/FakeHashProvider";

describe("Test Service CreateUser",()=>{
    it("should be able to create a new user",async ()=>{
        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const createUserService = new CreateUserService(repositoryFake, hashProviderFake);

        const recoveryPassword = new RecoveryPassword(fakeNodeMailerProvider,repositoryFake);

        const usr = await createUserService.execute({
            name:"Apollo Lima Modesto",
            email:"popo@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das orquideas",
            cpf:"50989126013",
            cnpj:"",
            houseNumber:12,
            district:"sao jose",
            complement:"b",
            reference:"na esquina",
            income:900,
            phoneNumber:"8892424740",
            phoneNumber2:"92435678",
            idCity:1
        });

        const link = await recoveryPassword.sendRecoveryMail({email:"popo@email.com"})

        expect(link).not.toBe("")

    });

    it("should be able to create a new user",async ()=>{
        const repositoryFake = new FakeUserRepository();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const recoveryPassword = new RecoveryPassword(fakeNodeMailerProvider,repositoryFake);

        expect(recoveryPassword.sendRecoveryMail({email:"popo@email.com"})).rejects.toBeInstanceOf(Erro)

    });

    
    
})
import "reflect-metadata"
import {CreateUserService} from "./CreateUserService";
import {FakeUserRepository} from "../infra/typeorm/repositories/fakes/FakeUserRepository";
import {RecoveryPassword} from './RecoveryPasswordService';
import {FakeNodeMailerProvider} from '@shared/infra/providers/mail/fakes/FakeNodeMailerProvider'
import Erro from '@shared/errors/AppError';
import FakeHashProvider from "../infra/providers/HashProvider/fakes/FakeHashProvider";

describe("Test Account Recovery",()=>{
    it("should be able to send a email to account recovery ",async ()=>{
        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();
        const recoveryPassword = new RecoveryPassword(fakeNodeMailerProvider,repositoryFake,hashProviderFake);
        
        const link = await recoveryPassword.sendRecoveryMail({email:"teste@teste.com"})

        expect(link).not.toBe("")

    },10000);

    it("should not be able to send a recovery email to a invalid email",async ()=>{
        const repositoryFake = new FakeUserRepository();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();
        const hashProviderFake = new FakeHashProvider();

        const recoveryPassword = new RecoveryPassword(fakeNodeMailerProvider,repositoryFake,hashProviderFake);

        expect(recoveryPassword.sendRecoveryMail({email:"popo@email.com"})).rejects.toBeInstanceOf(Erro)

    },10000);

    it("should be able to change the forgot password ",async ()=>{
        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const recoveryPassword = new RecoveryPassword(fakeNodeMailerProvider,repositoryFake,hashProviderFake);
        
        const userChanged = await recoveryPassword.changePassword({
            id:"85879990-4d56-46c6-8c71-7b7b8d084e62",
            email:"teste@teste.com",
            password:"cajuina"
        });

        const hashpassword = await hashProviderFake.genarateHash("cajuina");

        expect(userChanged.id).toBe("85879990-4d56-46c6-8c71-7b7b8d084e62")
        expect(userChanged.password).toEqual(hashpassword);
        
    });

    it("should not be able to change the forgot password when the email is incorrenct",async ()=>{
        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const recoveryPassword = new RecoveryPassword(fakeNodeMailerProvider,repositoryFake,hashProviderFake);

        expect(recoveryPassword.changePassword({
            id:"26a12884-9563-11eb-a8b3-0242ac130003",
            email:"josenenhum@email.com",
            password:"cajuina"
        })).rejects.toBeInstanceOf(Erro)
    });

    it("should not be able to change the forgot password when the uuid is incorrenct",async ()=>{
        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const recoveryPassword = new RecoveryPassword(fakeNodeMailerProvider,repositoryFake,hashProviderFake);

        expect(recoveryPassword.changePassword({
            id:"26a12884-9563-11eb-a8b3-0242ac130003",
            email:"teste@teste.com",
            password:"cajuina"
        })).rejects.toBeInstanceOf(Erro)

    });
    
})
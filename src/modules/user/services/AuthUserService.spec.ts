import "reflect-metadata"
import {AuthUserService} from "../services/AuthUserService";
import {FakeUserRepository} from "../infra/typeorm/repositories/fakes/FakeUserRepository";
import {CreateUserService} from "../services/CreateUserService"
import Erro from '@shared/errors/AppError';
import FakeHashProvider from "../infra/providers/HashProvider/fakes/FakeHashProvider";

describe("Test service of Auth service",()=>{

    it("Can create a JWT",async ()=>{
        const fakeRepository = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();

        const authService = new AuthUserService(fakeRepository,hashProviderFake);
        const createUserService = new CreateUserService(fakeRepository,hashProviderFake);

        const {email,id} = await createUserService.execute({
            name:"Abduh Lahn Xankahr",
            email:"abduh@mail.com",
            birthDate:new Date(),
            password:"1234",
            street:"rua dos árabes",
            cpf:"41702359085",
            cnpj:"",
            houseNumber:5,
            district:"bairro iraniano",
            complement:"A",
            reference:"na Ahli Kaja",
            income:3500,
            phoneNumber:"993450011",
            phoneNumber2:"988124400",
            idCity:1
        })

        const responseAuthentication = await authService.authenticate({email,password:"1234"});

        expect(responseAuthentication.user.email).toBe(email);
        expect(responseAuthentication.user.id).toBe(id);
        expect(responseAuthentication).toHaveProperty('token')
    })
})
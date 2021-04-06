import "reflect-metadata"
import {CreateUserService} from "../services/CreateUserService";
import {FakeUserRepository} from "../infra/typeorm/repositories/fakes/FakeUserRepository";
import Erro from '@shared/errors/AppError';
import FakeHashProvider from "../infra/providers/HashProvider/fakes/FakeHashProvider";
import { FakeNodeMailerProvider } from "@shared/infra/providers/mail/fakes/FakeNodeMailerProvider";

describe("Test Service CreateUser",()=>{
    it("should be able to create a new user",async ()=>{
        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();

        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const createUserService = new CreateUserService(fakeNodeMailerProvider,repositoryFake, hashProviderFake);

        const usr = await createUserService.execute({
            name:"Apollo",
            surname:"Lima Modesto",
            email:"jo@email.com",
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

        expect(usr).toHaveProperty("id");
        expect(usr.cpf).toBe("50989126013")
        expect(usr.idPlan).toBe(1)

    },10000);

    it(" should not be able to create a new user whith a duplicated email",async()=>{

        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();

        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const createUserService = new CreateUserService(fakeNodeMailerProvider,repositoryFake, hashProviderFake);

        await createUserService.execute({
            name:"Apollo",
            surname:"Lima Modesto",
            email:"joe@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das flores",
            cpf:"90487050029",
            cnpj:"",
            houseNumber:12,
            district:"RIacho verde",
            complement:"c",
            reference:"no bar",
            income:400,
            phoneNumber:"8892424740",
            phoneNumber2:"92435678",
            idCity:1
        });


        expect(createUserService.execute({
            name:"Apollo",
            surname:"Lima Modesto",
            email:"joe@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das orquideas",
            cpf:"54975522004",
            cnpj:"",
            houseNumber:12,
            district:"sao jose",
            complement:"b",
            reference:"na esquina",
            income:900,
            phoneNumber:"00000000",
            phoneNumber2:"92435678",
            idCity:1
        })).rejects.toBeInstanceOf(Erro);
    },10000);

    it(" should not be able to create a new user whithout a CNPJ or CPF",async()=>{

        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const createUserService = new CreateUserService(fakeNodeMailerProvider,repositoryFake, hashProviderFake);

        await expect(createUserService.execute({
            name:"Apollo",
            surname:"Lima Modesto",
            email:"jo@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das orquideas",
            cpf:"",
            cnpj:"",
            houseNumber:12,
            district:"sao jose",
            complement:"b",
            reference:"na esquina",
            income:900,
            phoneNumber:"8892424740",
            phoneNumber2:"92435678",
            idCity:1
        })).rejects.toBeInstanceOf(Erro);

    },10000);

    it(" should not be able to create a new user wrong CPF",async()=>{

        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const createUserService = new CreateUserService(fakeNodeMailerProvider,repositoryFake, hashProviderFake);


        await expect(createUserService.execute({
            name:"Apollo",
            surname:"Lima Modesto",
            email:"jo@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das orquideas",
            cpf:"00102354388",
            cnpj:"",
            houseNumber:12,
            district:"sao jose",
            complement:"b",
            reference:"na esquina",
            income:900,
            phoneNumber:"8892424740",
            phoneNumber2:"92435678",
            idCity:1
        })).rejects.toBeInstanceOf(Erro);

    },10000);

    it(" should not be able to create a new user whith a duplicated cpf",async()=>{

        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const createUserService = new CreateUserService(fakeNodeMailerProvider,repositoryFake, hashProviderFake);

        await createUserService.execute({
            name:"Apollo",
            surname:"Lima Modesto",
            email:"joe@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das flores",
            cpf:"84818636029",
            cnpj:"",
            houseNumber:12,
            district:"RIacho verde",
            complement:"c",
            reference:"no bar",
            income:400,
            phoneNumber:"8892424740",
            phoneNumber2:"92435678",
            idCity:1
        });


        expect(createUserService.execute({
            name:"Apollo",
            surname:"Lima Modesto",
            email:"joemary@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das orquideas",
            cpf:"84818636029",
            cnpj:"",
            houseNumber:12,
            district:"sao jose",
            complement:"b",
            reference:"na esquina",
            income:900,
            phoneNumber:"00000000",
            phoneNumber2:"92435678",
            idCity:1
        })).rejects.toBeInstanceOf(Erro);
    },10000);

    it(" should not be able to create a new user whith a duplicated cpf",async()=>{

        const repositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const createUserService = new CreateUserService(fakeNodeMailerProvider,repositoryFake, hashProviderFake);

        await createUserService.execute({
            name:"Apollo",
            surname:"Lima Modesto",
            email:"joe@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das flores",
            cpf:"",
            cnpj:"05853056000102",
            houseNumber:12,
            district:"RIacho verde",
            complement:"c",
            reference:"no bar",
            income:400,
            phoneNumber:"8892424740",
            phoneNumber2:"92435678",
            idCity:1
        });


        expect(createUserService.execute({
            name:"Joao",
            surname:"Lima",
            email:"joemary@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das orquideas",
            cpf:"",
            cnpj:"05853056000102",
            houseNumber:12,
            district:"sao jose",
            complement:"b",
            reference:"na esquina",
            income:900,
            phoneNumber:"00000000",
            phoneNumber2:"92435678",
            idCity:1
        })).rejects.toBeInstanceOf(Erro);
    });
    
})
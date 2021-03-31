import "reflect-metadata"
import {CreateUserService} from "../services/CreateUserService";
import {FakeUserRepository} from "../infra/typeorm/repositories/fakes/FakeUserRepository";
import Erro from '@shared/errors/AppError';

describe("Test Service CreateUser",()=>{
    it("should be able to create a new user",async ()=>{
        const repositoryFake = new FakeUserRepository();

        const createUserService = new CreateUserService(repositoryFake);

        const usr = await createUserService.execute({
            name:"Joao Geraldo da Cruz",
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

    });

    it(" should not be able to create a new user whith a duplicated email",async()=>{

        const repositoryFake = new FakeUserRepository();

        const createUserService = new CreateUserService(repositoryFake);

        await createUserService.execute({
            name:"Joe Many",
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
            name:"Joao Geraldo da Cruz",
            email:"joe@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das orquideas",
            cpf:"29120526024",
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
    });

    it(" should not be able to create a new user whith a wrong CPF",async()=>{

        const repositoryFake = new FakeUserRepository();

        const createUserService = new CreateUserService(repositoryFake);

        expect(createUserService.execute({
            name:"Joao Geraldo da Cruz",
            email:"jo@email.com",
            birthDate:new Date(),
            password:"321",
            street:"rua das orquideas",
            cpf:"50989120003",
            cnpj:"",
            houseNumber:12,
            district:"sao jose",
            complement:"b",
            reference:"na esquina",
            income:900,
            phoneNumber:"00000000",
            phoneNumber2:"92435678",
            idCity:1
        })).rejects.toBeInstanceOf(Erro)
    });

    

})
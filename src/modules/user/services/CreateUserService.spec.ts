import "reflect-metadata"
import {CreateUserService} from "../services/CreateUserService";
import {FakeUserRepository} from "../infra/typeorm/repositories/fakes/FakeUserRepository"

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

    // it("not should be able to create a new user whith a wrong CPF",()=>{
    //     expect(1+2).toBe(3)
    // });
})
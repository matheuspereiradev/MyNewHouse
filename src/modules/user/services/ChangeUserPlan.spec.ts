import "reflect-metadata"
import {CreateUserService} from "./CreateUserService";
import {FakeUserRepository} from "../infra/typeorm/repositories/fakes/FakeUserRepository";
import {FakeNodeMailerProvider} from '@shared/infra/providers/mail/fakes/FakeNodeMailerProvider'
import Erro from '@shared/errors/AppError';
import FakeHashProvider from "../infra/providers/HashProvider/fakes/FakeHashProvider";
import { ChangeUserPlan } from "./ChangeUserPlan";
import {FakePlanRepository} from "@modules/plans/infra/typeorm/repositories/fakes/FakePlanRepository"

describe("Test the change of plan",()=>{
    it("should be able to change the plan ",async ()=>{
        const userRepositoryFake = new FakeUserRepository();
        const planRepositoryFake = new FakePlanRepository();

        const changePlan = new ChangeUserPlan(userRepositoryFake,planRepositoryFake);

        const changedUser = await changePlan.execute("85879990-4d56-46c6-8c71-7b7b8d084e62",2)

        expect(changedUser.idPlan).toBe(2)

    });

    it("the default plan can have 1", async()=>{
            const userRepositoryFake = new FakeUserRepository();
            const hashProviderFake = new FakeHashProvider();
            const fakeNodeMailerProvider = new FakeNodeMailerProvider();
            const planRepositoryFake = new FakePlanRepository();
    
            const createUserService = new CreateUserService(fakeNodeMailerProvider,userRepositoryFake, hashProviderFake);
    
            const changePlan = new ChangeUserPlan(userRepositoryFake,planRepositoryFake);
    
            const user = await createUserService.execute({
                name:"Apollo",
                surname:"Lima Modesto",
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
                phoneNumber:"8892424740",
                phoneNumber2:"92435678",
                idCity:1,
                avatar:"img.png",
                gender:"F"
            });
    
            expect(user.idPlan).toBe(1)
    
    },10000);

    it("should not be able to change the plan with a invalid user",async ()=>{
        const userRepositoryFake = new FakeUserRepository();
        const planRepositoryFake = new FakePlanRepository();

        const changePlan = new ChangeUserPlan(userRepositoryFake,planRepositoryFake);

        expect(changePlan.execute("6abdc528-99a4-11eb-a8b3-0242ac130003",2)).rejects.toBeInstanceOf(Erro)

    });

    it("should not be able to change the plan ",async ()=>{
        const userRepositoryFake = new FakeUserRepository();
        const planRepositoryFake = new FakePlanRepository();

        const changePlan = new ChangeUserPlan(userRepositoryFake,planRepositoryFake);

        expect(changePlan.execute("85879990-4d56-46c6-8c71-7b7b8d084e62",5)).rejects.toBeInstanceOf(Erro)

    });
    
})
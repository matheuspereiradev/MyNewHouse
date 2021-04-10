import "reflect-metadata"
import {CreateUserService} from "./CreateUserService";
import {FakeUserRepository} from "../infra/typeorm/repositories/fakes/FakeUserRepository";
import {RecoveryPassword} from './RecoveryPasswordService';
import {FakeNodeMailerProvider} from '@shared/infra/providers/mail/fakes/FakeNodeMailerProvider'
import Erro from '@shared/errors/AppError';
import FakeHashProvider from "../infra/providers/HashProvider/fakes/FakeHashProvider";
import { ChangeUserPlan } from "./ChangeUserPlan";
import {FakePlanRepository} from "@modules/plans/infra/typeorm/repositories/fakes/FakePlanRepository"

describe("Test the change of plan",()=>{
    it("should be able to change the plan ",async ()=>{
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
            income:900,
            phoneNumber:"8892424740",
            phoneNumber2:"92435678",
            idCity:1
        });

        expect(user.idPlan).toBe(1)

        const changedUser = await changePlan.execute(user.id,2)

        expect(changedUser.idPlan).toBe(2)

    },10000);

    it("should not be able to change the plan with a invalid user",async ()=>{
        const userRepositoryFake = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();
        const planRepositoryFake = new FakePlanRepository();

        const createUserService = new CreateUserService(fakeNodeMailerProvider,userRepositoryFake, hashProviderFake);

        const changePlan = new ChangeUserPlan(userRepositoryFake,planRepositoryFake);

        expect(changePlan.execute("6abdc528-99a4-11eb-a8b3-0242ac130003",2)).rejects.toBeInstanceOf(Erro)

    },10000);

    it("should not be able to change the plan ",async ()=>{
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
            income:900,
            phoneNumber:"8892424740",
            phoneNumber2:"92435678",
            idCity:1
        });

        expect(changePlan.execute(user.id,5)).rejects.toBeInstanceOf(Erro)

    },10000);
    
})
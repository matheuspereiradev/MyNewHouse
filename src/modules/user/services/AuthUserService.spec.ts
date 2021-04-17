import "reflect-metadata"
import { AuthUserService } from "./AuthUserService";
import { FakeUserRepository } from "../infra/typeorm/repositories/fakes/FakeUserRepository";
import { CreateUserService } from "./CreateUserService"
import Erro from '@shared/errors/AppError';
import FakeHashProvider from "../infra/providers/HashProvider/fakes/FakeHashProvider";
import { FakeNodeMailerProvider } from "@shared/infra/providers/mail/fakes/FakeNodeMailerProvider";

describe("Test service of Auth service", () => {

    it("Can create a JWT", async () => {
        const fakeRepository = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();

        const authService = new AuthUserService(fakeRepository, hashProviderFake);

        const responseAuthentication = await authService.authenticate({ email:"teste@teste.com", password: "123" });

        expect(responseAuthentication.user.email).toBe("teste@teste.com");
        expect(responseAuthentication.user.id).toBe("85879990-4d56-46c6-8c71-7b7b8d084e62");
        expect(responseAuthentication).toHaveProperty('token')
    })

    it("Can't create a session with a non registred user", async () => {
        const fakeRepository = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();

        const authService = new AuthUserService(fakeRepository, hashProviderFake);

        expect(authService.authenticate({ email: "arshwaser@gmail.com", password: "1234" })).rejects.toBeInstanceOf(Erro);
    })

    it("Cannot create a JWT with a invalid password", async () => {
        const fakeRepository = new FakeUserRepository();
        const hashProviderFake = new FakeHashProvider();
        const fakeNodeMailerProvider = new FakeNodeMailerProvider();
        
        const authService = new AuthUserService(fakeRepository, hashProviderFake);
        const createUserService = new CreateUserService(fakeNodeMailerProvider,fakeRepository, hashProviderFake);
        
        expect(
            authService.authenticate({ email:"teste@teste.com", password: "abc" })
        ).rejects.toBeInstanceOf(Erro);

        
    })
})
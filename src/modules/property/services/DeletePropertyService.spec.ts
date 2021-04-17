import "reflect-metadata";
import Erro from '@shared/errors/AppError';
import { PropertyRepositoryFake } from "../infra/typeorm/repositories/fakes/PropertyRepositoryFake";
import { DeletePropertyService } from "./DeletePropertyService";

describe("Test DELETE a property",()=>{
    it("should be able delete a property ",async ()=>{
        const propertyRepositoryFake = new PropertyRepositoryFake();
        
        const deleteProperty = new DeletePropertyService(propertyRepositoryFake);

        const deleted = await deleteProperty.execute({
            idAdvertiser:"b5fb27c4-c5f7-4fc1-a56f-984007d65e79",
            idProperty:"66982f1c-61c9-4e96-86c3-65b806c4cd73"
        });

        expect(deleted.id).toBe("66982f1c-61c9-4e96-86c3-65b806c4cd73");

        const find = await propertyRepositoryFake.findByID("66982f1c-61c9-4e96-86c3-65b806c4cd73")

        expect(find).toBe(undefined)

    });

    it("shoud not be able delete a property", async()=>{
            
        const propertyRepositoryFake = new PropertyRepositoryFake();
        
        const deleteProperty = new DeletePropertyService(propertyRepositoryFake);

        expect(deleteProperty.execute({
            idAdvertiser:"b5fb27c4-c5f7-4fc1-a56f-984007d65e79",
            idProperty:"66982f1c-61c9-4e96-86c3-0000000000"
        })).rejects.toBeInstanceOf(Erro);

        const find = await propertyRepositoryFake.findByID("66982f1c-61c9-4e96-86c3-65b806c4cd73")
        
        expect(find).not.toBe(undefined)
    });

    it("should not be able to change the plan with a invalid user",async ()=>{
        const propertyRepositoryFake = new PropertyRepositoryFake();
        
        const deleteProperty = new DeletePropertyService(propertyRepositoryFake);

        expect(deleteProperty.execute({
            idAdvertiser:"b5fb27c4-c5f7-4fc1-a56f-984007d65000",
            idProperty:"66982f1c-61c9-4e96-86c3-65b806c4cd73"
        })).rejects.toBeInstanceOf(Erro);

    });

})
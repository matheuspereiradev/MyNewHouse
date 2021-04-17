import "reflect-metadata";
import {FakeNodeMailerProvider} from '@shared/infra/providers/mail/fakes/FakeNodeMailerProvider'
import Erro from '@shared/errors/AppError';
import {FakePlanRepository} from "@modules/plans/infra/typeorm/repositories/fakes/FakePlanRepository"
import { PropertyRepositoryFake } from "../infra/typeorm/repositories/fakes/PropertyRepositoryFake";
import { DeletePropertyService } from "./DeletePropertyService";
import { UpdatePropertyService } from "./UpdatePropertyService";
import { Property } from "../infra/typeorm/entities/Property";

describe("Test Update a property",()=>{
    it("should update the elemnts of a property ",async ()=>{
        const propertyRepositoryFake = new PropertyRepositoryFake();
        
        const updateService = new UpdatePropertyService(propertyRepositoryFake);

        //pegando uma propriedade generica para alterar
        const property = await propertyRepositoryFake.findByID("66982f1c-61c9-4e96-86c3-65b806c4cd73")

        expect(property.idAdvertiser).toBe("b5fb27c4-c5f7-4fc1-a56f-984007d65e79")
        expect(property.id).toBe("66982f1c-61c9-4e96-86c3-65b806c4cd73")

        property.note = "nota alterada"
        property.street = "rua A"
        property.hasPool = true
        property.idCity = 9
        property.amountParking = 7

        const updated = await updateService.execute(property);

        expect(updated.id).toBe("66982f1c-61c9-4e96-86c3-65b806c4cd73");
        expect(updated.note).toBe("nota alterada");
        expect(updated.street).toBe("rua A");
        expect(updated.hasPool).toBe(true);
        expect(updated.idCity).toBe(9);
        expect(updated.amountParking).toBe(7);

    });

    it("shoud not be able update a property whith other user", async()=>{
            
        const propertyRepositoryFake = new PropertyRepositoryFake();
        
        const updateService = new UpdatePropertyService(propertyRepositoryFake);

        //pegando uma propeirdade generica
        const property:Property = {
            id:"66982f1c-61c9-4e96-86c3-65b806c4cd73",
            complement:"Abcs",
            district:"bakl",
            created_at:new Date(),
            deleted_at:null,
            hasPool:true,
            isFinancing:true,
            amountBathroom:2,
            amountBedroom:4,
            amountParking:1,
            amountValue:6,
            houseNumber:1234,
            idAdvertiser:"b5fb27c4-c5f7-4fc1-a56f-984007d65000",
            advertiser:null,
            city:null,
            contractType:null,
            idCity:1,
            latitude:-45678,
            longitude:12345,
            length:111,
            note:"nada",
            street:"ruaa",
            width:12,
            propertyType:null,
            idPropertyType:2,
            idContractType:5
        };

        expect(updateService.execute(property)).rejects.toBeInstanceOf(Erro);

    });

    it("shoud not be able update a property whith a wrong id", async()=>{
            
        const propertyRepositoryFake = new PropertyRepositoryFake();
        
        const updateService = new UpdatePropertyService(propertyRepositoryFake);

        //pegando uma propeirdade generica
        const property:Property = {
            id:"66982f1c-61c9-4e96-86c3-65b80611111",
            complement:"Abcs",
            district:"bakl",
            created_at:new Date(),
            deleted_at:null,
            hasPool:true,
            isFinancing:true,
            amountBathroom:2,
            amountBedroom:4,
            amountParking:1,
            amountValue:6,
            houseNumber:1234,
            idAdvertiser:"b5fb27c4-c5f7-4fc1-a56f-984007d65e79",
            advertiser:null,
            city:null,
            contractType:null,
            idCity:1,
            latitude:-45678,
            longitude:12345,
            length:111,
            note:"nada",
            street:"ruaa",
            width:12,
            propertyType:null,
            idPropertyType:2,
            idContractType:5
        };

        expect(updateService.execute(property)).rejects.toBeInstanceOf(Erro);

    });


})
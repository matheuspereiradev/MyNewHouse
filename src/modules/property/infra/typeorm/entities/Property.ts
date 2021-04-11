import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
import { City } from "@modules/localization/infra/typeorm/entities/City";
import { ContractType } from "./ContractType";
import { PropertyType } from "./PropertyType";

@Entity("tb_user")
class Property{

    @PrimaryColumn()
    readonly id:string;

    @Column({name:"id_advertiser"})
    idAdvertiser:string;

    @Column()
    street:string;

    @Column({name:"house_number"})
    houseNumber:number;

    @Column()
    district:string;

    @Column()
    complement:string;

    @Column({name:"id_city"})
    idCity:number;

    @OneToOne(type=>City,city=>city.id)
    @JoinColumn({name:"id_city"})
    city:City

    @Column({name:"id_contract_type"})
    idContractType:number;

    @OneToOne(type=>ContractType,contractType=>contractType.id)
    @JoinColumn({name:"id_contract_type"})
    contractType:ContractType

    @Column({name:"id_property_type"})
    idPropertyType:number;

    @OneToOne(type=>PropertyType,propertyType=>propertyType.id)
    @JoinColumn({name:"id_property_type"})
    propertyType:PropertyType

    @Column({name:"amount_value"})
    amountValue:number;

    @Column({name:"is_financing"})
    isFinancing:boolean;

    @Column()
    latitude:number;

    @Column()
    longitude:number;

    @Column({name:"amount_bathroom"})
    amountBathroom:number;

    @Column({name:"amount_bedroom"})
    amountBedroom:number;

    @Column({name:"amount_parking"})
    amountParking:number;

    @Column({name:"has_pool"})
    hasPool:boolean;

    @Column()
    note:string;

    @Column()
    length:number;

    @Column()
    width:number;    

    @CreateDateColumn()
    created_at:Date;

    @DeleteDateColumn()
    deleted_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }

    }
}

export{Property};
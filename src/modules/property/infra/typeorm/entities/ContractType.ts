import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("tb_contract_type")
class ContractType{

    @PrimaryColumn()
    readonly id:number;

    @Column()
    name:string;
}

export{ ContractType };
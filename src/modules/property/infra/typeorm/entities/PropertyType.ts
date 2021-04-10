import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity("tb_property_type")
class PropertyType{

    @PrimaryColumn()
    readonly id:number;

    @Column()
    name:string;
}

export{ PropertyType };
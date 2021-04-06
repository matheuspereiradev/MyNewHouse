import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm"
import {v4 as uuid} from 'uuid'
import { City } from "@modules/localization/infra/typeorm/entities/City"

@Entity("tb_user")
class User{

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;

    @Column()
    surname:string;

    @Column()
    email:string;

    @Column({name:"birth_date"})
    birthDate:Date;

    @Column()
    password:string;

    @Column()
    cpf:string;

    @Column()
    cnpj:string;

    @Column()
    street:string;

    @Column({name:"number"})
    houseNumber:number;

    @Column()
    district:string;

    @Column()
    complement:string;

    @Column()
    reference:string;

    @Column()
    income:number;

    @Column({name:"phonenumber"})
    phoneNumber:string;

    @Column({name:"phonenumber_2"})
    phoneNumber2:string;

    @Column({name:"id_plan"})
    idPlan:number;

    @Column({name:"id_city"})
    idCity:number;

    @OneToOne(type=>City,city=>city.id)
    @JoinColumn({name:"id_city"})
    city:City

    @Column({name:"is_broker"})
    isBroker:boolean;

    @CreateDateColumn()
    created_at:Date;

    @DeleteDateColumn()
    deleted_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}

export{User};
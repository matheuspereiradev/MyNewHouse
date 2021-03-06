import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
import { City } from "@modules/localization/infra/typeorm/entities/City";
import configUser from '@config/user'
import { Plans } from "@modules/plans/infra/typeorm/entities/Plan";

@Entity("tb_user")
class User{

    @PrimaryColumn()
    readonly id:string;

    @Column()
    name:string;

    @Column()
    surname:string;

    @Column()
    slug:string;

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

    @Column({name:"phonenumber"})
    phoneNumber:string;

    @Column({name:"phonenumber_2"})
    phoneNumber2:string;

    @OneToOne(type=>Plans,plan=>plan.id)
    @JoinColumn({name:"id_plan"})
    plan:Plans

    @Column({name:"id_plan"})
    idPlan:number;

    @Column({name:"id_city"})
    idCity:number;

    @Column()
    avatar:string;

    @Column()
    gender:string;

    @OneToOne(type=>City,city=>city.id)
    @JoinColumn({name:"id_city"})
    city:City

    @CreateDateColumn()
    created_at:Date;

    @DeleteDateColumn()
    deleted_at:Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
            this.idPlan = configUser.plan.defaultPlan;
        }

    }
}

export{User};
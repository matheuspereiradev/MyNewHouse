import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm";
import {User} from "@modules/user/infra/typeorm/entities/User";
import {Plans} from "@modules/plans/infra/typeorm/entities/Plan";
import {v4 as uuid} from 'uuid';

@Entity("tb_billing")
class Billing{

    @PrimaryColumn()
    readonly id:string;

    @Column()
    barcode:string;

    @Column({name:"digitable_line"})
    digitableLine:string;

    @Column({name:"payment_link"})
    paymentLink:string;

    @Column({name:"our_number"})
    ourNumber:string;
    
    @Column({name:"payment_day"})
    paymentDay:Date;
    
    @Column({name:"billing_value"})
    billingValue:number;
    
    @Column({name:"expiration_date"})
    expirationDate:Date;

    @OneToOne(type=>Plans,plan=>plan.id)
    @JoinColumn({name:"id_product"})
    plan:Plans;

    @Column({name:"id_product"})
    idProduct:number;

    @OneToOne(type=>User,usr=>usr.id)
    @JoinColumn({name:"id_user"})
    user:User;

    @Column({name:"id_user"})
    idUser:string;

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

export{Billing};
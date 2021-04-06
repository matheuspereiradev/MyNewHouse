import {Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToOne, PrimaryColumn} from "typeorm"

@Entity("tb_plans")
class User{

    @PrimaryColumn()
    readonly id:number;

    @Column()
    name:string;

    @Column({name:"image_amount"})
    imageAmount:number;

    @Column({name:"video_amount"})
    videoAmount:number;

    @Column({name:"monthly_value"})
    monthlyValue:number;

    @Column({name:"ads_amount"})
    adsAmount:number;

    @CreateDateColumn()
    created_at:Date;

    @DeleteDateColumn()
    deleted_at:Date;

}

export{User};
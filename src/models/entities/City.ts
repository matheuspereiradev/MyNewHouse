import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tb_city")
class City {

    @PrimaryGeneratedColumn()
    readonly id:number;

    @Column()
    code:number;

    @Column()
    name:string;

    @Column()
    uf:string;

    @CreateDateColumn()
    created_at:Date;

}

export{City}
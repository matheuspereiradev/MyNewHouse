import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCity1616534950864 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_city",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name:"code",
                    type:"int",

                },
                {
                    name:"name",
                    type:"varchar",
                    length:"45"
                },
                {
                    name:"uf",
                    type:"varchar",
                    length:"2"
                },
                {
                    name:"created_at",
                    type:"timestamp",
                    default:"CURRENT_TIMESTAMP"
                }
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("tb_city");
    }

}
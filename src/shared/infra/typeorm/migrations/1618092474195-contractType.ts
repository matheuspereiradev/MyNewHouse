import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class contractType1618092474195 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_contract_type",
            columns:[
                {
                    name:"id",
                    type:"int",
                    isPrimary:true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name:"name",
                    type:"varchar",
                    length:"30"
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tb_contract_type")
    }

}

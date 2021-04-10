import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class propertyType1618091490344 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name:"tb_property_type",
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
        await queryRunner.dropTable("tb_property_type")
    }

}

import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class DropFieldisBroked1619045161613 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("tb_user","is_broker")
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_user",new TableColumn(
            {
                name:"id_broker",
                type:"tinyint",
                default:0
            })
        )
    }

}
